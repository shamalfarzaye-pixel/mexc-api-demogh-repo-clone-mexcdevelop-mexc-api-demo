/**
 * Private REST — SpotAccountInfo (AccountInformation)
 * API docs: Spot v3 API → Trading Endpoints
 * Run: node examples/Trading/AccountInformation.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.AccountInformation()
  .then(printResponse)
  .catch(printError)
