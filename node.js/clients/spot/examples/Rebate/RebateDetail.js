/**
 * Private REST — RebateDetail (RebateDetail)
 * API docs: Spot v3 API → Rebate Endpoints
 * Run: node examples/Rebate/RebateDetail.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.RebateDetail({ page: '1', limit: '10' })
  .then(printResponse)
  .catch(printError)
