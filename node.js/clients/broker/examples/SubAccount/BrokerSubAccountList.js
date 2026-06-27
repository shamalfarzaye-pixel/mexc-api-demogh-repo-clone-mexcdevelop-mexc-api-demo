/**
 * Private REST — BrokerSubAccountList
 * API docs: Broker API → Sub-Account Endpoints
 * Run: node examples/SubAccount/BrokerSubAccountList.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.brokerSubAccountList({ page: '1', limit: '10' })
  .then(printResponse)
  .catch(printError)
