/**
 * Private REST — BrokerCapitalDepositSubHisrec
 * API docs: Broker API → Deposit Endpoints
 * Run: node examples/Deposit/BrokerCapitalDepositSubHisrec.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.brokerCapitalDepositSubHisrec({ subAccount: 'demo001', page: '1', limit: '10' })
  .then(printResponse)
  .catch(printError)
