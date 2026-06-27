/**
 * Private REST — GetYesterdayPnl
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetYesterdayPnl.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getYesterdayPnl()
  .then(printResponse)
  .catch(printError)
