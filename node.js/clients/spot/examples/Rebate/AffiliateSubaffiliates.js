/**
 * Private REST — Subaffiliates (AffiliateSubaffiliates)
 * API docs: Spot v3 API → Rebate Endpoints
 * Run: node examples/Rebate/AffiliateSubaffiliates.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.AffiliateSubaffiliates({ page: '1', limit: '10' })
  .then(printResponse)
  .catch(printError)
