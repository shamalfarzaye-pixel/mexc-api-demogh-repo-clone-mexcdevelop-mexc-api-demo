/**
 * Private REST — CreateSub (VirtualSubAccount)
 * API docs: Spot v3 API → Sub-Account Endpoints
 * Run: node examples/SubAccount/VirtualSubAccount.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.VirtualSubAccount({ subAccount: 'demo001', note: 'demo' })
  .then(printResponse)
  .catch(printError)
