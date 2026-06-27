/**
 * Private REST — GetAssetAnalysisRecent
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetAssetAnalysisRecent.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getAssetAnalysisRecent({ currency: 'USDT' })
  .then(printResponse)
  .catch(printError)
