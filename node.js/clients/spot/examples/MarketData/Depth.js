/**
 * Public REST — Depth (Depth)
 * API docs: Spot v3 API → Market Data Endpoints
 * Run: node examples/MarketData/Depth.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.Depth({ symbol: 'BTCUSDT', limit: '5' })
  .then(printResponse)
  .catch(printError)
