/**
 * Private REST — TransferHistory (TransferHistory)
 * API docs: Spot v3 API → Wallet Endpoints
 * Run: node examples/Wallet/TransferHistory.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.TransferHistory({ fromAccountType: 'SPOT', toAccountType: 'FUTURES', page: '1', limit: '10' })
  .then(printResponse)
  .catch(printError)
