/**
 * Private REST — P2PReleaseCoinPost
 * API docs: P2P API → Order Endpoints
 * Run: node examples/Order/P2PReleaseCoinPost.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.p2PReleaseCoinPost({ advOrderNo: 'ORDER_ID' })
  .then(printResponse)
  .catch(printError)
