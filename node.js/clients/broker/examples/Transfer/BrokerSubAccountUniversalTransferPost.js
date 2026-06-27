/**
 * Private REST — BrokerSubAccountUniversalTransferPost
 * API docs: Broker API → Transfer Endpoints
 * Run: node examples/Transfer/BrokerSubAccountUniversalTransferPost.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.brokerSubAccountUniversalTransferPost({ fromAccount: 'master', toAccount: 'demo001', fromAccountType: 'SPOT', toAccountType: 'SPOT', asset: 'USDT', amount: '1' })
  .then(printResponse)
  .catch(printError)
