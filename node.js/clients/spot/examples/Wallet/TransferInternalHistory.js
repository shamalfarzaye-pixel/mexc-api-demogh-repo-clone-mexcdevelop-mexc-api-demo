/**
 * Private REST — InternalTransferHistory (TransferInternalHistory)
 * API docs: Spot v3 API → Wallet Endpoints
 * Run: node examples/Wallet/TransferInternalHistory.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.TransferInternalHistory({ page: '1', limit: '10' })
  .then(printResponse)
  .catch(printError)
