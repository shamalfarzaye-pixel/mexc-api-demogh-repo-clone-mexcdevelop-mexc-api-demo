/**
 * Private REST — CreateOrder
 * API docs: Futures API → Order Endpoints
 * Run: node examples/Order/CreateOrder.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.submitOrder({ symbol: 'BTC_USDT', vol: 1, side: 1, type: 1, openType: 1 })
  .then(printResponse)
  .catch(printError)
