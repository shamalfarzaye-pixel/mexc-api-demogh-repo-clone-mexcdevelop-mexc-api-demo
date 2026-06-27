/**
 * Private REST — GetContractFeeDiscountConfig
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetContractFeeDiscountConfig.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getContractFeeDiscountConfig()
  .then(printResponse)
  .catch(printError)
