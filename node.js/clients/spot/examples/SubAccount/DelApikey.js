/**
 * Private REST — DeleteSubApikey (DelApikey)
 * API docs: Spot v3 API → Sub-Account Endpoints
 * Run: node examples/SubAccount/DelApikey.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.DelApikey({ subAccount: 'demo001', apiKey: 'API_KEY' })
  .then(printResponse)
  .catch(printError)
