/**
 * Private REST — P2PUserDataStreamPost
 * API docs: P2P API → User Data Stream Endpoints
 * Run: node examples/UserDataStream/P2PUserDataStreamPost.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.p2PUserDataStreamPost()
  .then(printResponse)
  .catch(printError)
