/**
 * Private REST — BrokerSubAccountStatus
 * API docs: Broker API → Sub-Account Endpoints
 * Run: node examples/SubAccount/BrokerSubAccountStatus.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.brokerSubAccountStatus({ subAccount: 'demo001' })
  .then(printResponse)
  .catch(printError)
