/**
 * Private REST — GetStopOpenOrders
 * API docs: Futures API → Stop Order Endpoints
 * Run: node examples/StopOrder/GetStopOpenOrders.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getStopOpenOrders({ symbol: 'BTC_USDT', page_num: 1, page_size: 20 })
  .then(printResponse)
  .catch(printError)
