/**
 * Public REST — ExchangeInfo (ExchangeInformation)
 * API docs: Spot v3 API → Market Data Endpoints
 * Run: node examples/MarketData/ExchangeInformation.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.ExchangeInformation()
  .then(printResponse)
  .catch(printError)
