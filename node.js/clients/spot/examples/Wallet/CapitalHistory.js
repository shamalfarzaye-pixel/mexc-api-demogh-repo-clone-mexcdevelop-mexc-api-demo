/**
 * Private REST — ConvertHistory (CapitalHistory)
 * API docs: Spot v3 API → Wallet Endpoints
 * Run: node examples/Wallet/CapitalHistory.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.CapitalHistory({ limit: '10' })
  .then(printResponse)
  .catch(printError)
