/**
 * Private REST — QuerySubApikey (GetApiKey)
 * API docs: Spot v3 API → Sub-Account Endpoints
 * Run: node examples/SubAccount/GetApiKey.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.GetApiKey({ subAccount: 'demo001' })
  .then(printResponse)
  .catch(printError)
