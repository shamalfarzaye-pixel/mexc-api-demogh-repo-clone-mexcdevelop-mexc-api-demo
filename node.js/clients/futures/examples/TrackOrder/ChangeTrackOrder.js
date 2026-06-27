/**
 * Private REST — ChangeTrackOrder
 * API docs: Futures API → Track Order Endpoints
 * Run: node examples/TrackOrder/ChangeTrackOrder.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.changeTrackOrder({ trackOrderId: 'ORDER_ID', vol: 1 })
  .then(printResponse)
  .catch(printError)
