/**
 * Private REST — GetOpenOrders
 * API docs: Futures API → Order Endpoints
 * Run: node examples/Order/GetOpenOrders.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getOpenOrders({ symbol: 'BTC_USDT', page_num: 1, page_size: 20 })
  .then(printResponse)
  .catch(printError)
