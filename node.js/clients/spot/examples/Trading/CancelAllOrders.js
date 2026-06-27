/**
 * Private REST — CancelAllOrdersAll (CancelAllOrders)
 * API docs: Spot v3 API → Trading Endpoints
 * Run: node examples/Trading/CancelAllOrders.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.CancelAllOrders()
  .then(printResponse)
  .catch(printError)
