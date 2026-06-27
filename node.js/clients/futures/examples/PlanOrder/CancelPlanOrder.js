/**
 * Private REST — CancelPlanOrder
 * API docs: Futures API → Plan Order Endpoints
 * Run: node examples/PlanOrder/CancelPlanOrder.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.cancelPlanOrder({ symbol: 'BTC_USDT', orderId: 'ORDER_ID' })
  .then(printResponse)
  .catch(printError)
