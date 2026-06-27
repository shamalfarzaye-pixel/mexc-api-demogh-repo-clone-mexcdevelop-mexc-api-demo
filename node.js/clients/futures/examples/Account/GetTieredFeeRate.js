/**
 * Private REST — GetTieredFeeRate
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetTieredFeeRate.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getTieredFeeRate({ symbol: 'BTC_USDT' })
  .then(printResponse)
  .catch(printError)
