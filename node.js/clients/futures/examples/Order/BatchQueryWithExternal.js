/**
 * Private REST — BatchQueryWithExternal
 * API docs: Futures API → Order Endpoints
 * Run: node examples/Order/BatchQueryWithExternal.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.batchQueryWithExternal([])
  .then(printResponse)
  .catch(printError)
