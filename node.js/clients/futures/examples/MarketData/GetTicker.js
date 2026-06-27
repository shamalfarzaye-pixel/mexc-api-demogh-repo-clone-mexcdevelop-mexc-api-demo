/**
 * Public REST — GetTicker
 * API docs: Futures API → Market Data Endpoints
 * Run: node examples/MarketData/GetTicker.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.restApi.getTicker('BTC_USDT')
  .then(printResponse)
  .catch(printError)
