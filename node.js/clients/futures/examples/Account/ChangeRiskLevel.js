/**
 * Private REST — ChangeRiskLevel
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/ChangeRiskLevel.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.changeRiskLevel({ symbol: 'BTC_USDT', level: 1 })
  .then(printResponse)
  .catch(printError)
