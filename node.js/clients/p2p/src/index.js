const MexcP2P = require('./client')
const P2P = require('./p2p')
const ws = require('./websocket/chat')

module.exports = MexcP2P
module.exports.MexcP2P = MexcP2P
module.exports.P2P = P2P
module.exports.P2PChatWsClient = ws.P2PChatWsClient
module.exports.buildChatWSURL = ws.buildChatWSURL
module.exports.textMessage = ws.textMessage
module.exports.ChatMessageType = ws.ChatMessageType
module.exports.DEFAULT_CHAT_WS_URL = ws.DEFAULT_CHAT_WS_URL
