/**
 * Private REST — GetPositions
 * API docs: Futures API → Position Endpoints
 * Run: node examples/Position/GetPositions.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getPositions({ symbol: 'BTC_USDT' })
  .then(printResponse)
  .catch(printError)
