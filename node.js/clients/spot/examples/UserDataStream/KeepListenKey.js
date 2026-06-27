/**
 * Private REST — KeepListenKey (KeepListenKey)
 * API docs: Spot v3 API → User Data Stream (Listen Key) Endpoints
 * Run: node examples/UserDataStream/KeepListenKey.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.KeepListenKey({ listenKey: 'LISTEN_KEY' })
  .then(printResponse)
  .catch(printError)
