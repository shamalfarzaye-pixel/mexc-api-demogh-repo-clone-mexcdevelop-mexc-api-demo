/**
 * Private REST — CancelAllStopOrders
 * API docs: Futures API → Stop Order Endpoints
 * Run: node examples/StopOrder/CancelAllStopOrders.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.cancelAllStopOrders({ symbol: 'BTC_USDT' })
  .then(printResponse)
  .catch(printError)
