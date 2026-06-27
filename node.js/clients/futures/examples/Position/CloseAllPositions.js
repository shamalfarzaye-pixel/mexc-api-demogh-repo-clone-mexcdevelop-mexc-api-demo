/**
 * Private REST — CloseAllPositions
 * API docs: Futures API → Position Endpoints
 * Run: node examples/Position/CloseAllPositions.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.closeAllPositions({ symbol: 'BTC_USDT' })
  .then(printResponse)
  .catch(printError)
