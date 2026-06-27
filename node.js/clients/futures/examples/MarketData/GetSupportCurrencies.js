/**
 * Public REST — GetSupportCurrencies
 * API docs: Futures API → Market Data Endpoints
 * Run: node examples/MarketData/GetSupportCurrencies.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.restApi.getSupportCurrencies()
  .then(printResponse)
  .catch(printError)
