/**
 * Private REST — GetPositionMode
 * API docs: Futures API → Position Endpoints
 * Run: node examples/Position/GetPositionMode.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getPositionMode()
  .then(printResponse)
  .catch(printError)
