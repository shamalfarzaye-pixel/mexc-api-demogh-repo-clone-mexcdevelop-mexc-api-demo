/**
 * Public REST — Price (SymbolPriceTicker)
 * API docs: Spot v3 API → Market Data Endpoints
 * Run: node examples/MarketData/SymbolPriceTicker.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.SymbolPriceTicker({ symbol: 'BTCUSDT' })
  .then(printResponse)
  .catch(printError)
