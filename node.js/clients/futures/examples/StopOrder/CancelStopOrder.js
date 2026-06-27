/**
 * Private REST — CancelStopOrder
 * API docs: Futures API → Stop Order Endpoints
 * Run: node examples/StopOrder/CancelStopOrder.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.cancelStopOrder({ symbol: 'BTC_USDT', stopPlanOrderId: 'ORDER_ID' })
  .then(printResponse)
  .catch(printError)
