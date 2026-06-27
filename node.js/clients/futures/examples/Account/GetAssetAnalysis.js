/**
 * Private REST — GetAssetAnalysis
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetAssetAnalysis.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getAssetAnalysis({ currency: 'USDT', type: 1 })
  .then(printResponse)
  .catch(printError)
