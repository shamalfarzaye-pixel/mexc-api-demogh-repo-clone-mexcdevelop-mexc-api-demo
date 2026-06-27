/**
 * Private REST — P2POrderDetail
 * API docs: P2P API → Order Endpoints
 * Run: node examples/Order/P2POrderDetail.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.p2POrderDetail({ advOrderNo: 'ORDER_ID' })
  .then(printResponse)
  .catch(printError)
