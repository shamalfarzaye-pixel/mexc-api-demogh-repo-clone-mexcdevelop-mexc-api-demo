/**
 * Private REST — CancelTrackOrder
 * API docs: Futures API → Track Order Endpoints
 * Run: node examples/TrackOrder/CancelTrackOrder.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.cancelTrackOrder({ symbol: 'BTC_USDT', trackOrderId: 'ORDER_ID' })
  .then(printResponse)
  .catch(printError)
