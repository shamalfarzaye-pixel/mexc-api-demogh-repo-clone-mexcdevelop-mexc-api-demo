/**
 * Private REST — DepositAddress (DepositAddress)
 * API docs: Spot v3 API → Wallet Endpoints
 * Run: node examples/Wallet/DepositAddress.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.DepositAddress({ coin: 'USDT', network: 'TRC20' })
  .then(printResponse)
  .catch(printError)
