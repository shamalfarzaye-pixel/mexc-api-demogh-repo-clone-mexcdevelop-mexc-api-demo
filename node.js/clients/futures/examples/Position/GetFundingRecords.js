/**
 * Private REST — GetFundingRecords
 * API docs: Futures API → Position Endpoints
 * Run: node examples/Position/GetFundingRecords.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getFundingRecords({ symbol: 'BTC_USDT', page_num: 1, page_size: 20 })
  .then(printResponse)
  .catch(printError)
