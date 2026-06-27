/**
 * Private REST — ChaseLimitOrder
 * API docs: Futures API → Order Endpoints
 * Run: node examples/Order/ChaseLimitOrder.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.chaseLimitOrder({ orderId: 'ORDER_ID' })
  .then(printResponse)
  .catch(printError)
