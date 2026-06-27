/**
 * Private REST — PlaceOrder (Order)
 * API docs: Spot v3 API → Trading Endpoints
 * Run: node examples/Trading/Order.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.Order({ symbol: 'BTCUSDT', side: 'BUY', type: 'LIMIT', quantity: '0.001', price: '1' })
  .then(printResponse)
  .catch(printError)
