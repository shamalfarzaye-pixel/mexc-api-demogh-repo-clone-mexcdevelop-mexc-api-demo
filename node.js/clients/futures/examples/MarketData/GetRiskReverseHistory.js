/**
 * Public REST — GetRiskReverseHistory
 * API docs: Futures API → Market Data Endpoints
 * Run: node examples/MarketData/GetRiskReverseHistory.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.restApi.getRiskReverseHistory({ symbol: 'BTC_USDT', page_num: 1, page_size: 20 })
  .then(printResponse)
  .catch(printError)
