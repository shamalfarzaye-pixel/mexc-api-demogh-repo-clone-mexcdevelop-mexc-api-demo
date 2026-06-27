/**
 * Public REST — Ping (Ping)
 * API docs: Spot v3 API → Market Data Endpoints
 * Run: node examples/MarketData/Ping.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.Ping()
  .then(printResponse)
  .catch(printError)
