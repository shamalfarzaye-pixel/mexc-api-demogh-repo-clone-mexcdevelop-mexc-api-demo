/**
 * Private REST — GetProfitRate
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetProfitRate.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getProfitRate(1)
  .then(printResponse)
  .catch(printError)
