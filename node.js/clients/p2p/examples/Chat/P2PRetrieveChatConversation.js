/**
 * Private REST — P2PRetrieveChatConversation
 * API docs: P2P API → Chat Endpoints
 * Run: node examples/Chat/P2PRetrieveChatConversation.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.p2PRetrieveChatConversation({ orderNo: 'ORDER_ID' })
  .then(printResponse)
  .catch(printError)
