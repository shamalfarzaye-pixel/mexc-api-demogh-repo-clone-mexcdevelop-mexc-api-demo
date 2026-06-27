/**
 * Private REST — GetFeeRate
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetFeeRate.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getFeeRate({ symbol: 'BTC_USDT' })
  .then(printResponse)
  .catch(printError)
