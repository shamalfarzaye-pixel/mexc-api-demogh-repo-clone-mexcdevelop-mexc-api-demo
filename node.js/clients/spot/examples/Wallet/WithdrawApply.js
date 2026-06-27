/**
 * Private REST — WithdrawApply (WithdrawApply)
 * API docs: Spot v3 API → Wallet Endpoints
 * Run: node examples/Wallet/WithdrawApply.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.WithdrawApply({ coin: 'USDT', address: 'ADDRESS', amount: '1', network: 'TRC20' })
  .then(printResponse)
  .catch(printError)
