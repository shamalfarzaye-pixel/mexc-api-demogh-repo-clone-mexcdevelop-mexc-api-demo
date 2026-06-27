/**
 * Public REST — ApiSymbol (ApiDefault)
 * API docs: Spot v3 API → Market Data Endpoints
 * Run: node examples/MarketData/ApiDefault.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.ApiDefault()
  .then(printResponse)
  .catch(printError)
