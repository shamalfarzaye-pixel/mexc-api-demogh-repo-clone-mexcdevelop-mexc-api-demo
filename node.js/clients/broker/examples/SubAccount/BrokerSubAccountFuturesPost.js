/**
 * Private REST — BrokerSubAccountFuturesPost
 * API docs: Broker API → Sub-Account Endpoints
 * Run: node examples/SubAccount/BrokerSubAccountFuturesPost.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.brokerSubAccountFuturesPost({ subAccount: 'demo001' })
  .then(printResponse)
  .catch(printError)
