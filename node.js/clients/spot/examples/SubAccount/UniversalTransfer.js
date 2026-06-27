/**
 * Private REST — UniTransfer (UniversalTransfer)
 * API docs: Spot v3 API → Sub-Account Endpoints
 * Run: node examples/SubAccount/UniversalTransfer.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.UniversalTransfer({ fromAccount: 'master', toAccount: 'demo001', fromAccountType: 'SPOT', toAccountType: 'SPOT', asset: 'USDT', amount: '1' })
  .then(printResponse)
  .catch(printError)
