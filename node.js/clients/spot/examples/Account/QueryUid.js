/**
 * Private REST — QueryUid (QueryUid)
 * API docs: Spot v3 API → Account Endpoints
 * Run: node examples/Account/QueryUid.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.QueryUid()
  .then(printResponse)
  .catch(printError)
