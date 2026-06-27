/**
 * Private REST — QueryCurrencyInfo (CoinList)
 * API docs: Spot v3 API → Wallet Endpoints
 * Run: node examples/Wallet/CoinList.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.CoinList()
  .then(printResponse)
  .catch(printError)
