/**
 * Private REST — GetDiscountType
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetDiscountType.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getDiscountType()
  .then(printResponse)
  .catch(printError)
