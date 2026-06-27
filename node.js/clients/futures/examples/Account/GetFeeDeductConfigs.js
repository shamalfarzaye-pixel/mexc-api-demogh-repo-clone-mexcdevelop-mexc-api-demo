/**
 * Private REST — GetFeeDeductConfigs
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetFeeDeductConfigs.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getFeeDeductConfigs()
  .then(printResponse)
  .catch(printError)
