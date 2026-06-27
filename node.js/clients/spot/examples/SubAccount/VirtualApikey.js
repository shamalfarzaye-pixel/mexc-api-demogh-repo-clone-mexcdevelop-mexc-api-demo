/**
 * Private REST — CreateSubApikey (VirtualApikey)
 * API docs: Spot v3 API → Sub-Account Endpoints
 * Run: node examples/SubAccount/VirtualApikey.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.VirtualApikey({ subAccount: 'demo001', permissions: 'SPOT_ACCOUNT_READ' })
  .then(printResponse)
  .catch(printError)
