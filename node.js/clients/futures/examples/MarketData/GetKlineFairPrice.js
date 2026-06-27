/**
 * Public REST — GetKlineFairPrice
 * API docs: Futures API → Market Data Endpoints
 * Run: node examples/MarketData/GetKlineFairPrice.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.restApi.getKlineFairPrice('BTC_USDT', { interval: 'Min15' })
  .then(printResponse)
  .catch(printError)
