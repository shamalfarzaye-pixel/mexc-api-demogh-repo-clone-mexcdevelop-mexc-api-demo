/**
 * Private REST — GetStpSearch
 * API docs: Futures API → Self Trade Prevention Endpoints
 * Run: node examples/SelfTradePrevention/GetStpSearch.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getCurrentUserStpGroup()
  .then(printResponse)
  .catch(printError)
