/**
 * Private REST — P2PDownloadFile
 * API docs: P2P API → File Endpoints
 * Run: node examples/File/P2PDownloadFile.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.p2PDownloadFile({ fileId: 'FILE_ID' })
  .then(printResponse)
  .catch(printError)
