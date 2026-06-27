/**
 * Private REST — QuerySub (SubAccountList)
 * API docs: Spot v3 API → Sub-Account Endpoints
 * Run: node examples/SubAccount/SubAccountList.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.SubAccountList({ subAccount: 'demo001' })
  .then(printResponse)
  .catch(printError)
