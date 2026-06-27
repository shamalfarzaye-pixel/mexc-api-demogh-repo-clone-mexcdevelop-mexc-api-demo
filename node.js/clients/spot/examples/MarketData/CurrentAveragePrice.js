/**
 * Private REST — AvgPrice (CurrentAveragePrice)
 * API docs: Spot v3 API → Market Data Endpoints
 * Run: node examples/MarketData/CurrentAveragePrice.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.CurrentAveragePrice({ symbol: 'BTCUSDT' })
  .then(printResponse)
  .catch(printError)
