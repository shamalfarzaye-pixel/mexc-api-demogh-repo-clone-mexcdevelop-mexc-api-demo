/**
 * Private REST — BrokerRebateTaxQuery
 * API docs: Broker API → Rebate Endpoints
 * Run: node examples/Rebate/BrokerRebateTaxQuery.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.brokerRebateTaxQuery({ page: '1', limit: '10' })
  .then(printResponse)
  .catch(printError)
