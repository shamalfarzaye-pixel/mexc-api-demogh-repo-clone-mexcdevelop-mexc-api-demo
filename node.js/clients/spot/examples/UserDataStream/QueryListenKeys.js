/**
 * Private REST — QueryListenKeys (QueryListenKeys)
 * API docs: Spot v3 API → User Data Stream (Listen Key) Endpoints
 * Run: node examples/UserDataStream/QueryListenKeys.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.QueryListenKeys()
  .then(printResponse)
  .catch(printError)
