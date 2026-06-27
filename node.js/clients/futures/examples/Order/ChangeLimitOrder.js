/**
 * Private REST — ChangeLimitOrder
 * API docs: Futures API → Order Endpoints
 * Run: node examples/Order/ChangeLimitOrder.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.changeLimitOrder({ orderId: 'ORDER_ID', price: '50000', vol: 1 })
  .then(printResponse)
  .catch(printError)
