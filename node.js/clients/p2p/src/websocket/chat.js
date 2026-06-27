const WebSocket = require('ws')

const DEFAULT_CHAT_WS_URL = 'wss://fiat.mexc.com/ws'
const PING_INTERVAL_MS = 5000
const INITIAL_RECONNECT_DELAY_MS = 1000
const MAX_RECONNECT_DELAY_MS = 60000

const ChatMessageType = {
  TEXT: 1,
  IMAGE: 2,
  VIDEO: 3,
  FILE: 4
}

function buildChatWSURL (listenKey, conversationId) {
  const q = new URLSearchParams({ listenKey, conversationId })
  return `${DEFAULT_CHAT_WS_URL}?${q.toString()}`
}

function textMessage (conversationId, content) {
  return {
    content,
    conversationId,
    type: ChatMessageType.TEXT,
    imageUrl: '',
    imageThumbUrl: '',
    videoUrl: '',
    fileUrl: ''
  }
}

class P2PChatWsClient {
  constructor (options = {}) {
    const { listenKey, conversationId, wsURL, autoReconnect = true } = options
    if (!listenKey || !conversationId) {
      throw new Error('listenKey and conversationId are required')
    }
    this.listenKey = listenKey
    this.conversationId = conversationId
    this.wsURL = wsURL || buildChatWSURL(listenKey, conversationId)
    this.autoReconnect = autoReconnect
    this.ws = null
    this.pingTimer = null
    this.reconnectTimer = null
    this.reconnectAttempts = 0
    this.manualDisconnect = false
    this._handlers = Object.create(null)
  }

  on (event, handler) {
    if (!this._handlers[event]) this._handlers[event] = []
    this._handlers[event].push(handler)
    return this
  }

  _emit (event, ...args) {
    const list = this._handlers[event]
    if (list) list.forEach(fn => fn(...args))
  }

  connect () {
    this.manualDisconnect = false
    if (this.ws && (this.ws.readyState === WebSocket.CONNECTING || this.ws.readyState === WebSocket.OPEN)) {
      return
    }
    this.ws = new WebSocket(this.wsURL)
    this.ws.on('open', () => this._onOpen())
    this.ws.on('message', (data) => this._onMessage(data))
    this.ws.on('error', (err) => this._emit('error', err))
    this.ws.on('close', (code, reason) => this._onClose(code, reason))
  }

  disconnect () {
    this.manualDisconnect = true
    this._stopPing()
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer)
      this.reconnectTimer = null
    }
    if (this.ws) {
      this.ws.removeAllListeners()
      this.ws.close()
      this.ws = null
    }
    this.reconnectAttempts = 0
  }

  _onOpen () {
    this.reconnectAttempts = 0
    this._startPing()
    this._emit('open')
  }

  _onClose (code, reason) {
    this._stopPing()
    this._emit('close', code, reason ? reason.toString() : '')
    if (!this.manualDisconnect && this.autoReconnect) {
      this._scheduleReconnect()
    }
  }

  _scheduleReconnect () {
    const delay = Math.min(
      INITIAL_RECONNECT_DELAY_MS * Math.pow(2, this.reconnectAttempts),
      MAX_RECONNECT_DELAY_MS
    )
    this.reconnectAttempts++
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null
      this.connect()
    }, delay)
  }

  _startPing () {
    this._stopPing()
    this.pingTimer = setInterval(() => this.ping(), PING_INTERVAL_MS)
  }

  _stopPing () {
    if (this.pingTimer) {
      clearInterval(this.pingTimer)
      this.pingTimer = null
    }
  }

  send (data) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return false
    const str = typeof data === 'string' ? data : JSON.stringify(data)
    this.ws.send(str)
    return true
  }

  ping () {
    return this.send({ method: 'PING' })
  }

  sendMessage (message) {
    return this.send({
      method: 'SEND_MESSAGE',
      params: JSON.stringify(message)
    })
  }

  sendTextMessage (conversationId, content) {
    return this.sendMessage(textMessage(conversationId, content))
  }

  _onMessage (data) {
    let raw
    try {
      raw = JSON.parse(data.toString())
    } catch (e) {
      this._emit('error', e)
      return
    }
    this._emit('raw', raw)

    switch (raw.method) {
      case 'PING':
        if (raw.success) this._emit('pong', raw.data)
        break
      case 'SEND_MESSAGE':
        this._emit('sendAck', raw)
        break
      case 'RECEIVE_MESSAGE':
        if (!raw.data) break
        try {
          const msg = typeof raw.data === 'string' ? JSON.parse(raw.data) : raw.data
          this._emit('message', msg)
        } catch (e) {
          this._emit('error', e)
        }
        break
      default:
        break
    }
  }
}

module.exports = {
  P2PChatWsClient,
  buildChatWSURL,
  textMessage,
  ChatMessageType,
  DEFAULT_CHAT_WS_URL
}
