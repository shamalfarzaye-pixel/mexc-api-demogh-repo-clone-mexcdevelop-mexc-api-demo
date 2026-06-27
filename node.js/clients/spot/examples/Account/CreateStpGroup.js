/**
 * Private REST — CreateStpGroup (CreateStpGroup)
 * API docs: Spot v3 API → Account Endpoints
 * Run: node examples/Account/CreateStpGroup.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.CreateStpGroup({ groupName: 'demo' })
  .then(printResponse)
  .catch(printError)
