/**
 * Private REST — P2PConfirmPaidPost
 * API docs: P2P API → Order Endpoints
 * Run: node examples/Order/P2PConfirmPaidPost.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.p2PConfirmPaidPost({ advOrderNo: 'ORDER_ID' })
  .then(printResponse)
  .catch(printError)
