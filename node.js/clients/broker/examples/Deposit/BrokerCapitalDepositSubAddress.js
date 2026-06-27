/**
 * Private REST — BrokerCapitalDepositSubAddress
 * API docs: Broker API → Deposit Endpoints
 * Run: node examples/Deposit/BrokerCapitalDepositSubAddress.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.brokerCapitalDepositSubAddress({ subAccount: 'demo001', coin: 'USDT', network: 'TRC20' })
  .then(printResponse)
  .catch(printError)
