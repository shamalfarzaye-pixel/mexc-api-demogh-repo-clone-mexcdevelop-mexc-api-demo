/**
 * Private REST — BrokerCapitalDepositSubHisrecGetall
 * API docs: Broker API → Deposit Endpoints
 * Run: node examples/Deposit/BrokerCapitalDepositSubHisrecGetall.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.brokerCapitalDepositSubHisrecGetall({ subAccount: 'demo001', page: '1', limit: '10' })
  .then(printResponse)
  .catch(printError)
