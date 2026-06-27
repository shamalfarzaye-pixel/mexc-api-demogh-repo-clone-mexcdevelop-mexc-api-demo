/**
 * Private REST — QuerySubAsset (GetAsset)
 * API docs: Spot v3 API → Sub-Account Endpoints
 * Run: node examples/SubAccount/GetAsset.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.GetAsset({ subAccount: 'demo001' })
  .then(printResponse)
  .catch(printError)
