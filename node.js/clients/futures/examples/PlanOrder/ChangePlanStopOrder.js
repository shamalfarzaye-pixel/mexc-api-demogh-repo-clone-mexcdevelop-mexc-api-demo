/**
 * Private REST — ChangePlanStopOrder
 * API docs: Futures API → Plan Order Endpoints
 * Run: node examples/PlanOrder/ChangePlanStopOrder.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.changePlanStopOrder({ orderId: 'ORDER_ID', stopLossPrice: '48000' })
  .then(printResponse)
  .catch(printError)
