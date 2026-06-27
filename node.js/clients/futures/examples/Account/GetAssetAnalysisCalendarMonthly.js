/**
 * Private REST — GetAssetAnalysisCalendarMonthly
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetAssetAnalysisCalendarMonthly.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getAssetAnalysisCalendarMonthly({ startTime: 1700000000000, endTime: 1700086400000 })
  .then(printResponse)
  .catch(printError)
