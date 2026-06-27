/**
 * Private REST — BrokerCapitalWithdrawApplyPost
 * API docs: Broker API → Withdraw Endpoints
 * Run: node examples/Withdraw/BrokerCapitalWithdrawApplyPost.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.brokerCapitalWithdrawApplyPost({ coin: 'USDT', address: 'ADDRESS', amount: '1', network: 'TRC20' })
  .then(printResponse)
  .catch(printError)
