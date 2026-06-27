/**
 * Private REST — AllOrders (AllOrders)
 * API docs: Spot v3 API → Trading Endpoints
 * Run: node examples/Trading/AllOrders.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.AllOrders({ symbol: 'BTCUSDT', limit: '10' })
  .then(printResponse)
  .catch(printError)
