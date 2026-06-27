/**
 * Public REST — Trades (RecentTradesList)
 * API docs: Spot v3 API → Market Data Endpoints
 * Run: node examples/MarketData/RecentTradesList.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.RecentTradesList({ symbol: 'BTCUSDT', limit: '5' })
  .then(printResponse)
  .catch(printError)
