/**
 * Private REST — ConvertList (Capital)
 * API docs: Spot v3 API → Wallet Endpoints
 * Run: node examples/Wallet/Capital.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.Capital()
  .then(printResponse)
  .catch(printError)
