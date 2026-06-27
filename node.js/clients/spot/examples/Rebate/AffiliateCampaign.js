/**
 * Private REST — AffiliateCampaign (AffiliateCampaign)
 * API docs: Spot v3 API → Rebate Endpoints
 * Run: node examples/Rebate/AffiliateCampaign.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.AffiliateCampaign({ page: '1', limit: '10' })
  .then(printResponse)
  .catch(printError)
