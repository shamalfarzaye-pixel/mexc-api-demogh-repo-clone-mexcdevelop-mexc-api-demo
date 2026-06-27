/**
 * Private REST — InternalTransfer (TransferInternal)
 * API docs: Spot v3 API → Wallet Endpoints
 * Run: node examples/Wallet/TransferInternal.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.TransferInternal({ fromAccountType: 'SPOT', toAccountType: 'FUTURES', asset: 'USDT', amount: '1' })
  .then(printResponse)
  .catch(printError)
