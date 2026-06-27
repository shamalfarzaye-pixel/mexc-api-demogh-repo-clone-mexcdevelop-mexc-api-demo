/**
 * Private REST — CancelOrder (CancelOrder)
 * API docs: Spot v3 API → Trading Endpoints
 * Run: node examples/Trading/CancelOrder.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.CancelOrder({ symbol: 'BTCUSDT', orderId: 'ORDER_ID' })
  .then(printResponse)
  .catch(printError)
