/**
 * Public REST — GetDeals
 * API docs: Futures API → Market Data Endpoints
 * Run: node examples/MarketData/GetDeals.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.restApi.getDeals('BTC_USDT', 20)
  .then(printResponse)
  .catch(printError)
