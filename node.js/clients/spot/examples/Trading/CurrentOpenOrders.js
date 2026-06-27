/**
 * Private REST — OpenOrder (CurrentOpenOrders)
 * API docs: Spot v3 API → Trading Endpoints
 * Run: node examples/Trading/CurrentOpenOrders.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.CurrentOpenOrders({ symbol: 'BTCUSDT' })
  .then(printResponse)
  .catch(printError)
