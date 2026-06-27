/**
 * Public REST — GetIndexPrice
 * API docs: Futures API → Market Data Endpoints
 * Run: node examples/MarketData/GetIndexPrice.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.restApi.getIndexPrice('BTC_USDT')
  .then(printResponse)
  .catch(printError)
