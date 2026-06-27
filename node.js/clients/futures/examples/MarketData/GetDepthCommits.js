/**
 * Public REST — GetDepthCommits
 * API docs: Futures API → Market Data Endpoints
 * Run: node examples/MarketData/GetDepthCommits.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.restApi.getDepthCommits('BTC_USDT', 20)
  .then(printResponse)
  .catch(printError)
