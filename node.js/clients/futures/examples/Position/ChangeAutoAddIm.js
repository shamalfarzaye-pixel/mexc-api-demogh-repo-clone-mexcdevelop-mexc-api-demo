/**
 * Private REST — ChangeAutoAddIm
 * API docs: Futures API → Position Endpoints
 * Run: node examples/Position/ChangeAutoAddIm.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.changeAutoAddIm({ positionId: 1, isEnabled: true })
  .then(printResponse)
  .catch(printError)
