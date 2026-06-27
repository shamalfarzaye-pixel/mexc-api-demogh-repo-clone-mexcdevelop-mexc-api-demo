/**
 * Public REST — GetFundingRate
 * API docs: Futures API → Market Data Endpoints
 * Run: node examples/MarketData/GetFundingRate.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.restApi.getFundingRate('BTC_USDT')
  .then(printResponse)
  .catch(printError)
