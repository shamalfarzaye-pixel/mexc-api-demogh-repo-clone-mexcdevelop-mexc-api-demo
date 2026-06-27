/**
 * Private REST — ReferCode (ReferCode)
 * API docs: Spot v3 API → Rebate Endpoints
 * Run: node examples/Rebate/ReferCode.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.ReferCode()
  .then(printResponse)
  .catch(printError)
