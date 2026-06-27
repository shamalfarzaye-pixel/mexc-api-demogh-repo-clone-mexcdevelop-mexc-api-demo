/**
 * Private REST — QueryMxDeduct (QueryMxDeduct)
 * API docs: Spot v3 API → Trading Endpoints
 * Run: node examples/Trading/QueryMxDeduct.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.QueryMxDeduct()
  .then(printResponse)
  .catch(printError)
