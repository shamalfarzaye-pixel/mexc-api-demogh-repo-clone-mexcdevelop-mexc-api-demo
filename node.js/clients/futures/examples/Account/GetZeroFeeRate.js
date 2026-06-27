/**
 * Private REST — GetZeroFeeRate
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetZeroFeeRate.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getZeroFeeRate({ symbol: 'BTC_USDT' })
  .then(printResponse)
  .catch(printError)
