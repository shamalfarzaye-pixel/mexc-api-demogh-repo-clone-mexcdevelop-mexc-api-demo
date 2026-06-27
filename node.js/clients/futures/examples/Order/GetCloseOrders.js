/**
 * Private REST — GetCloseOrders
 * API docs: Futures API → Order Endpoints
 * Run: node examples/Order/GetCloseOrders.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getCloseOrders({ symbol: 'BTC_USDT', page_num: 1, page_size: 20 })
  .then(printResponse)
  .catch(printError)
