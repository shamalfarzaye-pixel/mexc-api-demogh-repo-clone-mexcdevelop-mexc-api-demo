/**
 * Private REST — GetRiskLimit
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetRiskLimit.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getRiskLimit({ symbol: 'BTC_USDT' })
  .then(printResponse)
  .catch(printError)
