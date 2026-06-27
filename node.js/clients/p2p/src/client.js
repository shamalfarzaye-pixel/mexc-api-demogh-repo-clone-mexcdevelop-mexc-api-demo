const P2P = require('./p2p')
const { P2PChatWsClient, buildChatWSURL, textMessage, ChatMessageType, DEFAULT_CHAT_WS_URL } = require('./websocket/chat')

/**
 * Root MEXC P2P connector.
 *   const client = new MexcP2P({ apiKey, apiSecret })
 *   const ws = client.createChatWs({ listenKey, conversationId })
 */
class MexcP2P extends P2P {
  createChatWs (config) {
    return new P2PChatWsClient(config)
  }
}

module.exports = MexcP2P
module.exports.MexcP2P = MexcP2P
module.exports.P2P = P2P
module.exports.P2PChatWsClient = P2PChatWsClient
module.exports.buildChatWSURL = buildChatWSURL
module.exports.textMessage = textMessage
module.exports.ChatMessageType = ChatMessageType
module.exports.DEFAULT_CHAT_WS_URL = DEFAULT_CHAT_WS_URL
