/**
 * Public REST — GetRiskReverse
 * API docs: Futures API → Market Data Endpoints
 * Run: node examples/MarketData/GetRiskReverse.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.restApi.getRiskReverse('BTC_USDT')
  .then(printResponse)
  .catch(printError)
