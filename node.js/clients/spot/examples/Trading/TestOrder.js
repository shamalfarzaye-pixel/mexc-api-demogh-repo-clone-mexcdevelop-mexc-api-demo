/**
 * Private REST — TestOrder (TestOrder)
 * API docs: Spot v3 API → Trading Endpoints
 * Run: node examples/Trading/TestOrder.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.TestOrder({ symbol: 'BTCUSDT', side: 'BUY', type: 'LIMIT', quantity: '0.001', price: '1' })
  .then(printResponse)
  .catch(printError)
