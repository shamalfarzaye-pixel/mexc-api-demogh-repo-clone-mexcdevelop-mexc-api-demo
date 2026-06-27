/**
 * Private REST — KycStatus (KycStatus)
 * API docs: Spot v3 API → Account Endpoints
 * Run: node examples/Account/KycStatus.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.KycStatus()
  .then(printResponse)
  .catch(printError)
