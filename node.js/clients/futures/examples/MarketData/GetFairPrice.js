/**
 * Public REST — GetFairPrice
 * API docs: Futures API → Market Data Endpoints
 * Run: node examples/MarketData/GetFairPrice.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.restApi.getFairPrice('BTC_USDT')
  .then(printResponse)
  .catch(printError)
