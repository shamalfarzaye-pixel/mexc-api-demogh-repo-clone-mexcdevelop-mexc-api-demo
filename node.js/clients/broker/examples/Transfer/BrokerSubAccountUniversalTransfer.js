/**
 * Private REST — BrokerSubAccountUniversalTransfer
 * API docs: Broker API → Transfer Endpoints
 * Run: node examples/Transfer/BrokerSubAccountUniversalTransfer.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.brokerSubAccountUniversalTransfer({ fromAccount: 'master', toAccount: 'demo001', fromAccountType: 'SPOT', toAccountType: 'SPOT', asset: 'USDT', amount: '1' })
  .then(printResponse)
  .catch(printError)
