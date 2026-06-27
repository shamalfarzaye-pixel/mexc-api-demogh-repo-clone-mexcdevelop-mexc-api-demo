/**
 * Private REST — GetLeverage
 * API docs: Futures API → Position Endpoints
 * Run: node examples/Position/GetLeverage.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getLeverage({ symbol: 'BTC_USDT' })
  .then(printResponse)
  .catch(printError)
