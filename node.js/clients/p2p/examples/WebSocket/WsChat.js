/**
 * Private WebSocket — P2P chat
 * API docs: P2P API → Chat / User Data Stream
 * Run: node examples/WebSocket/WsChat.js
 */
const { P2PChatWsClient } = require('../_lib')

const listenKey = process.env.MEXC_P2P_LISTEN_KEY || ''
const conversationId = process.env.MEXC_P2P_CONVERSATION_ID || ''

if (!listenKey || !conversationId) {
  console.error('Set MEXC_P2P_LISTEN_KEY and MEXC_P2P_CONVERSATION_ID in .env')
  process.exit(1)
}

const client = new P2PChatWsClient({ listenKey, conversationId })
client.on('open', () => console.log('connected'))
client.on('message', (msg) => console.log('[chat]', msg.fromNickName, msg.content))
client.on('error', (err) => console.error(err?.message ?? err))
client.connect()
process.on('SIGINT', () => { client.disconnect(); process.exit(0) })
