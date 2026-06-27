/**
 * Private REST — ChangePositionMode
 * API docs: Futures API → Position Endpoints
 * Run: node examples/Position/ChangePositionMode.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.changePositionMode({ positionMode: 1 })
  .then(printResponse)
  .catch(printError)
