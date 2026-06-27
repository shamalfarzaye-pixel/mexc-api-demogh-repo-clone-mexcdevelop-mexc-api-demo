/**
 * Private REST — GetTodayPnl
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetTodayPnl.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getTodayPnl({ currency: 'USDT' })
  .then(printResponse)
  .catch(printError)
