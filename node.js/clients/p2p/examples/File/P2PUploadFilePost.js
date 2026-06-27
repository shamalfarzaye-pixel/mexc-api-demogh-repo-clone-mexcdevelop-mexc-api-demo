/**
 * Private REST — P2PUploadFilePost
 * API docs: P2P API → File Endpoints
 * Run: node examples/File/P2PUploadFilePost.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.p2PUploadFilePost({ fileName: 'demo.png' })
  .then(printResponse)
  .catch(printError)
