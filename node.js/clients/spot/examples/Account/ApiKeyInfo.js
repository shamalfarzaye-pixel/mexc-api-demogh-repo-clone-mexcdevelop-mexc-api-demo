/**
 * Private REST — ApiKeyInfo (ApiKeyInfo)
 * API docs: Spot v3 API → Account Endpoints
 * Run: node examples/Account/ApiKeyInfo.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.ApiKeyInfo()
  .then(printResponse)
  .catch(printError)
