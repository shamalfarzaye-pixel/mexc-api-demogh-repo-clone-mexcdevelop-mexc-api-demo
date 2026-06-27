/**
 * Public REST — AggTrades (CompressedTradesList)
 * API docs: Spot v3 API → Market Data Endpoints
 * Run: node examples/MarketData/CompressedTradesList.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.CompressedTradesList({ symbol: 'BTCUSDT', limit: '5' })
  .then(printResponse)
  .catch(printError)
