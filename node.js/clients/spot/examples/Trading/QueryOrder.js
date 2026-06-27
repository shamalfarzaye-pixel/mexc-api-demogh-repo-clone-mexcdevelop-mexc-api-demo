/**
 * Private REST — QueryOrder (QueryOrder)
 * API docs: Spot v3 API → Trading Endpoints
 * Run: node examples/Trading/QueryOrder.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.QueryOrder({ symbol: 'BTCUSDT', orderId: 'ORDER_ID' })
  .then(printResponse)
  .catch(printError)
