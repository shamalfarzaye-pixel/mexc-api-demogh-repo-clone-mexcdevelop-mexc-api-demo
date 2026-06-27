/**
 * Private REST — GetStpList
 * API docs: Futures API → Self Trade Prevention Endpoints
 * Run: node examples/SelfTradePrevention/GetStpList.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getStpGroups({ page_num: 1, page_size: 20 })
  .then(printResponse)
  .catch(printError)
