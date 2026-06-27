/**
 * Private REST — AffiliateCommissionDetail (AffiliateDetail)
 * API docs: Spot v3 API → Rebate Endpoints
 * Run: node examples/Rebate/AffiliateDetail.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.AffiliateDetail({ page: '1', limit: '10' })
  .then(printResponse)
  .catch(printError)
