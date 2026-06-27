/**
 * Private REST — AffiliateCommission (Affiliate)
 * API docs: Spot v3 API → Rebate Endpoints
 * Run: node examples/Rebate/Affiliate.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.Affiliate({ page: '1', limit: '10' })
  .then(printResponse)
  .catch(printError)
