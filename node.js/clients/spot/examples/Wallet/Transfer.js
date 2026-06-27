/**
 * Private REST — Transfer (Transfer)
 * API docs: Spot v3 API → Wallet Endpoints
 * Run: node examples/Wallet/Transfer.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.Transfer({ fromAccountType: 'SPOT', toAccountType: 'FUTURES', asset: 'USDT', amount: '1' })
  .then(printResponse)
  .catch(printError)
