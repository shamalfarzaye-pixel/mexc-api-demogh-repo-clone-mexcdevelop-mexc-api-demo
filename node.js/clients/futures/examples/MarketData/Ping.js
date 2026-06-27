/**
 * Public REST — Ping
 * API docs: Futures API → Market Data Endpoints
 * Run: node examples/MarketData/Ping.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.restApi.ping()
  .then(printResponse)
  .catch(printError)
