/**
 * Private REST — TransferHistoryById (TransferHistoryId)
 * API docs: Spot v3 API → Wallet Endpoints
 * Run: node examples/Wallet/TransferHistoryId.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.TransferHistoryId({ tranId: 'TRAN_ID' })
  .then(printResponse)
  .catch(printError)
