/**
 * Private REST — PlaceTrackOrder
 * API docs: Futures API → Track Order Endpoints
 * Run: node examples/TrackOrder/PlaceTrackOrder.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.placeTrackOrder({ symbol: 'BTC_USDT', vol: 1, side: 1 })
  .then(printResponse)
  .catch(printError)
