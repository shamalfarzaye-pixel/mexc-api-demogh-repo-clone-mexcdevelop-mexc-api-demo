/**
 * Private REST — BatchCancelWithExternal
 * API docs: Futures API → Order Endpoints
 * Run: node examples/Order/BatchCancelWithExternal.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.batchCancelWithExternal([])
  .then(printResponse)
  .catch(printError)
