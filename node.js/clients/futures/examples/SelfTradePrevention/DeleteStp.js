/**
 * Private REST — DeleteStp
 * API docs: Futures API → Self Trade Prevention Endpoints
 * Run: node examples/SelfTradePrevention/DeleteStp.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.deleteStpGroup({ configName: 'demo' })
  .then(printResponse)
  .catch(printError)
