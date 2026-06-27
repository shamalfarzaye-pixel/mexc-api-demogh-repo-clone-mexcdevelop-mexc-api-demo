/**
 * Public REST — Kline (Kline)
 * API docs: Spot v3 API → Market Data Endpoints
 * Run: node examples/MarketData/Kline.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.Kline({ symbol: 'BTCUSDT', interval: '1m', limit: '10' })
  .then(printResponse)
  .catch(printError)
