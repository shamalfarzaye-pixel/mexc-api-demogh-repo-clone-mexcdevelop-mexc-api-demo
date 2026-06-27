/**
 * Public REST — Time (Servertime)
 * API docs: Spot v3 API → Market Data Endpoints
 * Run: node examples/MarketData/Servertime.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.Servertime()
  .then(printResponse)
  .catch(printError)
