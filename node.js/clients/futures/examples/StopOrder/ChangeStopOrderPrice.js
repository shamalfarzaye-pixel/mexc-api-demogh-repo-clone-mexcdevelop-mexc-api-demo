/**
 * Private REST — ChangeStopOrderPrice
 * API docs: Futures API → Stop Order Endpoints
 * Run: node examples/StopOrder/ChangeStopOrderPrice.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.changeStopOrderPrice({ orderId: 'ORDER_ID', triggerPrice: '50000' })
  .then(printResponse)
  .catch(printError)
