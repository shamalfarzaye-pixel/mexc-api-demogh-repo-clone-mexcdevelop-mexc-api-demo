/**
 * Private REST — BrokerSubAccountApiKeyDelete
 * API docs: Broker API → Sub-Account Endpoints
 * Run: node examples/SubAccount/BrokerSubAccountApiKeyDelete.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.brokerSubAccountApiKeyDelete({ subAccount: 'demo001', apiKey: 'API_KEY' })
  .then(printResponse)
  .catch(printError)
