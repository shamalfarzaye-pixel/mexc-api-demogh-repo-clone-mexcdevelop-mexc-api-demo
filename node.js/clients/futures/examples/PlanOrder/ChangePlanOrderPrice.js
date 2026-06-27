/**
 * Private REST — ChangePlanOrderPrice
 * API docs: Futures API → Plan Order Endpoints
 * Run: node examples/PlanOrder/ChangePlanOrderPrice.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.changePlanOrderPrice({ orderId: 'ORDER_ID', triggerPrice: '50000' })
  .then(printResponse)
  .catch(printError)
