/**
 * Private REST — GetAssetAnalysisV3
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetAssetAnalysisV3.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getAssetAnalysisV3({ startTime: 1700000000000, endTime: 1700086400000 })
  .then(printResponse)
  .catch(printError)
