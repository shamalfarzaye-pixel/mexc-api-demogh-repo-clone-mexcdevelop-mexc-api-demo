/**
 * Private REST — DepositHistory (DepositHisrec)
 * API docs: Spot v3 API → Wallet Endpoints
 * Run: node examples/Wallet/DepositHisrec.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.DepositHisrec({ coin: 'USDT', limit: '10' })
  .then(printResponse)
  .catch(printError)
