/**
 * Public REST — GetDepth
 * API docs: Futures API → Market Data Endpoints
 * Run: node examples/MarketData/GetDepth.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.restApi.getDepth('BTC_USDT', 20)
  .then(printResponse)
  .catch(printError)
