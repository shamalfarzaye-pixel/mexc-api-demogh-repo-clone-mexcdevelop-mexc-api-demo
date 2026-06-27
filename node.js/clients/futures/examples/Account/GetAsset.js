/**
 * Private REST — GetAsset
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetAsset.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getAsset('USDT')
  .then(printResponse)
  .catch(printError)
