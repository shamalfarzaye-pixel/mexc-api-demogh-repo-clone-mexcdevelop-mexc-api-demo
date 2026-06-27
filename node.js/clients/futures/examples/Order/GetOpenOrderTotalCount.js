/**
 * Private REST — GetOpenOrderTotalCount
 * API docs: Futures API → Order Endpoints
 * Run: node examples/Order/GetOpenOrderTotalCount.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getOpenOrderTotalCount({ symbol: 'BTC_USDT' })
  .then(printResponse)
  .catch(printError)
