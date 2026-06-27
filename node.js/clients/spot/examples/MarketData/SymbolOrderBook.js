/**
 * Public REST — BookTicker (SymbolOrderBook)
 * API docs: Spot v3 API → Market Data Endpoints
 * Run: node examples/MarketData/SymbolOrderBook.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.SymbolOrderBook({ symbol: 'BTCUSDT' })
  .then(printResponse)
  .catch(printError)
