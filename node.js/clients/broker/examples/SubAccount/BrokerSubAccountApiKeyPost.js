/**
 * Private REST — BrokerSubAccountApiKeyPost
 * API docs: Broker API → Sub-Account Endpoints
 * Run: node examples/SubAccount/BrokerSubAccountApiKeyPost.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.brokerSubAccountApiKeyPost({ subAccount: 'demo001', permissions: 'SPOT_ACCOUNT_READ' })
  .then(printResponse)
  .catch(printError)
