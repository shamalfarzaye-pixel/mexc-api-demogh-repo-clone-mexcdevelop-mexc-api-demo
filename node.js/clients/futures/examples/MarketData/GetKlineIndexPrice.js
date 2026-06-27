/**
 * Public REST — GetKlineIndexPrice
 * API docs: Futures API → Market Data Endpoints
 * Run: node examples/MarketData/GetKlineIndexPrice.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.restApi.getKlineIndexPrice('BTC_USDT', { interval: 'Min15' })
  .then(printResponse)
  .catch(printError)
