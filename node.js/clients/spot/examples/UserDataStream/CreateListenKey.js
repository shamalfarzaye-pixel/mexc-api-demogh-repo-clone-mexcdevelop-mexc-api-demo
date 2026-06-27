/**
 * Private REST — CreateListenKey (CreateListenKey)
 * API docs: Spot v3 API → User Data Stream (Listen Key) Endpoints
 * Run: node examples/UserDataStream/CreateListenKey.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.CreateListenKey()
  .then(printResponse)
  .catch(printError)
