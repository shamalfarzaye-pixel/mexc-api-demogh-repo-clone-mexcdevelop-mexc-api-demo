/**
 * Private REST — BrokerSubAccountApiKey
 * API docs: Broker API → Sub-Account Endpoints
 * Run: node examples/SubAccount/BrokerSubAccountApiKey.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.brokerSubAccountApiKey({ subAccount: 'demo001' })
  .then(printResponse)
  .catch(printError)
