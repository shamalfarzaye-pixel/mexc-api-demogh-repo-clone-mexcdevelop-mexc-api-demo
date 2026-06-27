/**
 * Public REST — GetAnnouncements (GetAnnouncements)
 * API docs: Spot v3 API → Market Data Endpoints
 * Run: node examples/MarketData/GetAnnouncements.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.GetAnnouncements()
  .then(printResponse)
  .catch(printError)
