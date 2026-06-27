/**
 * Public REST — Ticker24hr (TickerPriceChange)
 * API docs: Spot v3 API → Market Data Endpoints
 * Run: node examples/MarketData/TickerPriceChange.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.TickerPriceChange()
  .then(printResponse)
  .catch(printError)
