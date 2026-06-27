/**
 * Private REST — GetHistoryOrders
 * API docs: Futures API → Order Endpoints
 * Run: node examples/Order/GetHistoryOrders.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getHistoryOrders({ symbol: 'BTC_USDT', page_num: 1, page_size: 20 })
  .then(printResponse)
  .catch(printError)
