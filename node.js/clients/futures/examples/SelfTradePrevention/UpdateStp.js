/**
 * Private REST — UpdateStp
 * API docs: Futures API → Self Trade Prevention Endpoints
 * Run: node examples/SelfTradePrevention/UpdateStp.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.updateStpGroup({ configName: 'demo', blacklist: [] })
  .then(printResponse)
  .catch(printError)
