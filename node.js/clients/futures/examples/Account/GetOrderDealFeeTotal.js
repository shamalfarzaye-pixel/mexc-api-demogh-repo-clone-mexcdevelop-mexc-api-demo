/**
 * Private REST — GetOrderDealFeeTotal
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetOrderDealFeeTotal.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getOrderDealFeeTotal()
  .then(printResponse)
  .catch(printError)
