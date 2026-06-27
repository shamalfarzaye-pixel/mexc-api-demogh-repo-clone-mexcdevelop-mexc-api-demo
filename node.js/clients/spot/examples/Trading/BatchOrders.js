/**
 * Private REST — BatchOrder (BatchOrders)
 * API docs: Spot v3 API → Trading Endpoints
 * Run: node examples/Trading/BatchOrders.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.BatchOrders({ batchOrders: [] })
  .then(printResponse)
  .catch(printError)
