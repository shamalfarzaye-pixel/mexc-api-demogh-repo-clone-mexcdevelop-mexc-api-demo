/**
 * Public REST — QueryOfflineSymbols (QueryOfflineSymbols)
 * API docs: Spot v3 API → Market Data Endpoints
 * Run: node examples/MarketData/QueryOfflineSymbols.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.QueryOfflineSymbols()
  .then(printResponse)
  .catch(printError)
