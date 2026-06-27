/**
 * Private REST — SelfRecordsDetail (KickBack)
 * API docs: Spot v3 API → Rebate Endpoints
 * Run: node examples/Rebate/KickBack.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.KickBack({ page: '1', limit: '10' })
  .then(printResponse)
  .catch(printError)
