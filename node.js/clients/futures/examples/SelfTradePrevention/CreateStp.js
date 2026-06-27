/**
 * Private REST — CreateStp
 * API docs: Futures API → Self Trade Prevention Endpoints
 * Run: node examples/SelfTradePrevention/CreateStp.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.createStpGroup({ configName: 'demo', blacklist: [] })
  .then(printResponse)
  .catch(printError)
