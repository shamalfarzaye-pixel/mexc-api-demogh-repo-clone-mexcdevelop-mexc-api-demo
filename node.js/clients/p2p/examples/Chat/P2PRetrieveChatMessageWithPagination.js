/**
 * Private REST — P2PRetrieveChatMessageWithPagination
 * API docs: P2P API → Chat Endpoints
 * Run: node examples/Chat/P2PRetrieveChatMessageWithPagination.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.p2PRetrieveChatMessageWithPagination({ conversationId: 'CONV_ID', page: '1', pageSize: '10' })
  .then(printResponse)
  .catch(printError)
