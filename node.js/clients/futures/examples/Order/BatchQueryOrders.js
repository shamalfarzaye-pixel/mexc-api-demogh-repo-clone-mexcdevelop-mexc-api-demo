/**
 * Private REST — BatchQueryOrders
 * API docs: Futures API → Order Endpoints
 * Run: node examples/Order/BatchQueryOrders.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.batchQueryOrders({ symbol: 'BTC_USDT', order_ids: '1,2' })
  .then(printResponse)
  .catch(printError)
