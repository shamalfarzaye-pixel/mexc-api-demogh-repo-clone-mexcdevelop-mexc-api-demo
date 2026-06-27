/**
 * Private REST — CancelAllPlanOrders
 * API docs: Futures API → Plan Order Endpoints
 * Run: node examples/PlanOrder/CancelAllPlanOrders.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.cancelAllPlanOrders({ symbol: 'BTC_USDT' })
  .then(printResponse)
  .catch(printError)
