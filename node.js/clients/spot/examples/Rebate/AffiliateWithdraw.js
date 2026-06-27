/**
 * Private REST — AffiliateWithdraw (AffiliateWithdraw)
 * API docs: Spot v3 API → Rebate Endpoints
 * Run: node examples/Rebate/AffiliateWithdraw.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.AffiliateWithdraw({ page: '1', limit: '10' })
  .then(printResponse)
  .catch(printError)
