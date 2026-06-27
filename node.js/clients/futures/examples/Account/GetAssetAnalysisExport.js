/**
 * Private REST — GetAssetAnalysisExport
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetAssetAnalysisExport.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getAssetAnalysisExport({ startTime: 1700000000000, endTime: 1700086400000 })
  .then(printResponse)
  .catch(printError)
