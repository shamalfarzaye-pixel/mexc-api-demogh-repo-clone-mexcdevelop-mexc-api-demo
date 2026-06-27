/**
 * Private REST — GenDepositAddress (GenerateDepositAddress)
 * API docs: Spot v3 API → Wallet Endpoints
 * Run: node examples/Wallet/GenerateDepositAddress.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.GenerateDepositAddress({ coin: 'USDT', network: 'TRC20' })
  .then(printResponse)
  .catch(printError)
