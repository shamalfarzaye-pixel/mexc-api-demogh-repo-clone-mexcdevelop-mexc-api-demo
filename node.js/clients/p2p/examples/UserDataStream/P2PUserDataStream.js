/**
 * Private REST — P2PUserDataStream
 * API docs: P2P API → User Data Stream Endpoints
 * Run: node examples/UserDataStream/P2PUserDataStream.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.p2PUserDataStream()
  .then(printResponse)
  .catch(printError)
