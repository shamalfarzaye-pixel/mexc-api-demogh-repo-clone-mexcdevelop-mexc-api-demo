/**
 * Private REST — RebateHistory (TaxQuery)
 * API docs: Spot v3 API → Rebate Endpoints
 * Run: node examples/Rebate/TaxQuery.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.TaxQuery({ page: '1', limit: '10' })
  .then(printResponse)
  .catch(printError)
