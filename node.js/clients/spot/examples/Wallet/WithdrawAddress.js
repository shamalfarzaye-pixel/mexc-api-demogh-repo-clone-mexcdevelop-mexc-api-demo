/**
 * Private REST — WithdrawAddress (WithdrawAddress)
 * API docs: Spot v3 API → Wallet Endpoints
 * Run: node examples/Wallet/WithdrawAddress.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.WithdrawAddress({ coin: 'USDT' })
  .then(printResponse)
  .catch(printError)
