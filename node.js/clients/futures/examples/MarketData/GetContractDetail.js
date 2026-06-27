/**
 * Public REST — GetContractDetail
 * API docs: Futures API → Market Data Endpoints
 * Run: node examples/MarketData/GetContractDetail.js
 */
const { createPublicClient, printResponse, printError } = require('../_lib')

const client = createPublicClient()

client.restApi.getContractDetail('BTC_USDT')
  .then(printResponse)
  .catch(printError)
