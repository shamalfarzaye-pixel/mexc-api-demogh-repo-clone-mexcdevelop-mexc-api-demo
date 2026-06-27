/**
 * Private REST — ReversePosition
 * API docs: Futures API → Position Endpoints
 * Run: node examples/Position/ReversePosition.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.reversePosition({ symbol: 'BTC_USDT', positionId: 1, vol: 1 })
  .then(printResponse)
  .catch(printError)
