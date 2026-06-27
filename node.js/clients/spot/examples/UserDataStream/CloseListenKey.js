/**
 * Private REST — CloseListenKey (CloseListenKey)
 * API docs: Spot v3 API → User Data Stream (Listen Key) Endpoints
 * Run: node examples/UserDataStream/CloseListenKey.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.CloseListenKey({ listenKey: 'LISTEN_KEY' })
  .then(printResponse)
  .catch(printError)
