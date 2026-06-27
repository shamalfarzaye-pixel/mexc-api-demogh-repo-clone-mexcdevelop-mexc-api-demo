/**
 * Private REST — QueryUniTransfer (SubAccountTransferHistory)
 * API docs: Spot v3 API → Sub-Account Endpoints
 * Run: node examples/SubAccount/SubAccountTransferHistory.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.SubAccountTransferHistory({ tranId: 'TRAN_ID' })
  .then(printResponse)
  .catch(printError)
