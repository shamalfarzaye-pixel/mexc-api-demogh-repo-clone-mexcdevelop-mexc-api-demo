/**
 * Private REST — AddUidToStpGroup (AddUidToStpGroup)
 * API docs: Spot v3 API → Account Endpoints
 * Run: node examples/Account/AddUidToStpGroup.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.AddUidToStpGroup({ groupId: '1', uidList: ["123"] })
  .then(printResponse)
  .catch(printError)
