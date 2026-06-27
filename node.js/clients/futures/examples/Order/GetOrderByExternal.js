/**
 * Private REST — GetOrderByExternal
 * API docs: Futures API → Order Endpoints
 * Run: node examples/Order/GetOrderByExternal.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getOrderByExternal({ symbol: 'BTC_USDT', external_oid: 'ext-1' })
  .then(printResponse)
  .catch(printError)
