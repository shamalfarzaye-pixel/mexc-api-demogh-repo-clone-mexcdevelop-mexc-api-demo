/**
 * Private REST — CancelWithdraw (CancelWithdraw)
 * API docs: Spot v3 API → Wallet Endpoints
 * Run: node examples/Wallet/CancelWithdraw.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.CancelWithdraw({ id: 'WITHDRAW_ID' })
  .then(printResponse)
  .catch(printError)
