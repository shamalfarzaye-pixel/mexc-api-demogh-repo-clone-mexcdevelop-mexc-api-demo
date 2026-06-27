/**
 * Private REST — ChangeLeverage
 * API docs: Futures API → Position Endpoints
 * Run: node examples/Position/ChangeLeverage.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.changeLeverage({ symbol: 'BTC_USDT', leverage: 10 })
  .then(printResponse)
  .catch(printError)
