/**
 * Private REST — WithdrawHistory (WithdrawHistory)
 * API docs: Spot v3 API → Wallet Endpoints
 * Run: node examples/Wallet/WithdrawHistory.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.WithdrawHistory({ coin: 'USDT', limit: '10' })
  .then(printResponse)
  .catch(printError)
