/**
 * Private REST — DeleteUidFromStpGroup (DeleteUidFromStpGroup)
 * API docs: Spot v3 API → Account Endpoints
 * Run: node examples/Account/DeleteUidFromStpGroup.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.DeleteUidFromStpGroup({ groupId: '1', uidList: ["123"] })
  .then(printResponse)
  .catch(printError)
