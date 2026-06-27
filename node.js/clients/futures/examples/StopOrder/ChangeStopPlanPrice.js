/**
 * Private REST — ChangeStopPlanPrice
 * API docs: Futures API → Stop Order Endpoints
 * Run: node examples/StopOrder/ChangeStopPlanPrice.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.changeStopPlanPrice({ orderId: 'ORDER_ID', triggerPrice: '50000' })
  .then(printResponse)
  .catch(printError)
