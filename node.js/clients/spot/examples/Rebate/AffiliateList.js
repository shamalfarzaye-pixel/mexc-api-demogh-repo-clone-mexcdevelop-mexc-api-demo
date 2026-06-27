/**
 * Private REST — AffiliateList (AffiliateList)
 * API docs: Spot v3 API → Rebate Endpoints
 * Run: node examples/Rebate/AffiliateList.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.AffiliateList({ page: '1', limit: '10' })
  .then(printResponse)
  .catch(printError)
