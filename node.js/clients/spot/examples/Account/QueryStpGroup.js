/**
 * Private REST — QueryStpGroup (QueryStpGroup)
 * API docs: Spot v3 API → Account Endpoints
 * Run: node examples/Account/QueryStpGroup.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.QueryStpGroup()
  .then(printResponse)
  .catch(printError)
