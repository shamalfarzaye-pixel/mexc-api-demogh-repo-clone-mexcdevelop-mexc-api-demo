/**
 * Private REST — BrokerCapitalDepositSubAddressPost
 * API docs: Broker API → Deposit Endpoints
 * Run: node examples/Deposit/BrokerCapitalDepositSubAddressPost.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.brokerCapitalDepositSubAddressPost({ subAccount: 'demo001', coin: 'USDT', network: 'TRC20' })
  .then(printResponse)
  .catch(printError)
