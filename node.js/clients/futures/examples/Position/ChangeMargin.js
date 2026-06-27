/**
 * Private REST — ChangeMargin
 * API docs: Futures API → Position Endpoints
 * Run: node examples/Position/ChangeMargin.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.changeMargin({ positionId: 1, amount: '1', type: 1 })
  .then(printResponse)
  .catch(printError)
