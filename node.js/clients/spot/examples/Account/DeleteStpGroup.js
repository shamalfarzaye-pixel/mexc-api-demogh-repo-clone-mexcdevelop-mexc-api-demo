/**
 * Private REST — DeleteStpGroup (DeleteStpGroup)
 * API docs: Spot v3 API → Account Endpoints
 * Run: node examples/Account/DeleteStpGroup.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.DeleteStpGroup({ groupId: '1' })
  .then(printResponse)
  .catch(printError)
