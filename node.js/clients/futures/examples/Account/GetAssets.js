/**
 * Private REST — GetAssets
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetAssets.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getAssets()
  .then(printResponse)
  .catch(printError)
