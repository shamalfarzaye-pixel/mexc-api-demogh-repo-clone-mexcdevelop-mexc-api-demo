/**
 * Private REST — TradeFee (TradeFee)
 * API docs: Spot v3 API → Account Endpoints
 * Run: node examples/Account/TradeFee.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.TradeFee({ symbol: 'BTCUSDT' })
  .then(printResponse)
  .catch(printError)
