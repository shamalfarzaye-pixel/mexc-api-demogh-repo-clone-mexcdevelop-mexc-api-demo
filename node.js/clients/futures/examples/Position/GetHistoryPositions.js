/**
 * Private REST — GetHistoryPositions
 * API docs: Futures API → Position Endpoints
 * Run: node examples/Position/GetHistoryPositions.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getHistoryPositions({ symbol: 'BTC_USDT', page_num: 1, page_size: 20 })
  .then(printResponse)
  .catch(printError)
