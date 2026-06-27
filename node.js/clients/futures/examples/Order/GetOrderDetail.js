/**
 * Private REST — GetOrderDetail
 * API docs: Futures API → Order Endpoints
 * Run: node examples/Order/GetOrderDetail.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getOrderDetail({ orderId: '1' })
  .then(printResponse)
  .catch(printError)
