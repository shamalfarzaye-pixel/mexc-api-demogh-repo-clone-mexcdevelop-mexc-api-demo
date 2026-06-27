/**
 * Private REST — CancelAllOrders (CancelallOpenOrders)
 * API docs: Spot v3 API → Trading Endpoints
 * Run: node examples/Trading/CancelallOpenOrders.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.CancelallOpenOrders({ symbol: 'BTCUSDT' })
  .then(printResponse)
  .catch(printError)
