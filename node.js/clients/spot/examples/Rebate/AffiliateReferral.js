/**
 * Private REST — AffiliateReferral (AffiliateReferral)
 * API docs: Spot v3 API → Rebate Endpoints
 * Run: node examples/Rebate/AffiliateReferral.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.AffiliateReferral({ page: '1', limit: '10' })
  .then(printResponse)
  .catch(printError)
