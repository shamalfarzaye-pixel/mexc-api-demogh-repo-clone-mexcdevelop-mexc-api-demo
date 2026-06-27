/**
 * Private REST — CancelAllOrders
 * API docs: Futures API → Order Endpoints
 * Run: node examples/Order/CancelAllOrders.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.cancelAllOrders({ symbol: 'BTC_USDT' })
  .then(printResponse)
  .catch(printError)
