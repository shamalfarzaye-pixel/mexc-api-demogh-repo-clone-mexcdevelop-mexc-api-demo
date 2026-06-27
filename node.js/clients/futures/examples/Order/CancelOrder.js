/**
 * Private REST — CancelOrder
 * API docs: Futures API → Order Endpoints
 * Run: node examples/Order/CancelOrder.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.cancelOrder({ orderId: 'ORDER_ID' })
  .then(printResponse)
  .catch(printError)
