/**
 * Private REST — SpotmyTrade (AccountTradeList)
 * API docs: Spot v3 API → Trading Endpoints
 * Run: node examples/Trading/AccountTradeList.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.AccountTradeList({ symbol: 'BTCUSDT', limit: '10' })
  .then(printResponse)
  .catch(printError)
