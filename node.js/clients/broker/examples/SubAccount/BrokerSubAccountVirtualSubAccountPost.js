/**
 * Private REST — BrokerSubAccountVirtualSubAccountPost
 * API docs: Broker API → Sub-Account Endpoints
 * Run: node examples/SubAccount/BrokerSubAccountVirtualSubAccountPost.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.brokerSubAccountVirtualSubAccountPost({ subAccount: 'demo001', note: 'demo' })
  .then(printResponse)
  .catch(printError)
