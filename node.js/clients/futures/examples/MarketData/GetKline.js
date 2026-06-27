/**
 * Public REST — GetKline
 * API docs: Futures API → Market Data Endpoints
 * Run: node examples/MarketData/GetKline.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.restApi.getKline('BTC_USDT', { interval: 'Min15' })
  .then(printResponse)
  .catch(printError)
