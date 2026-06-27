/**
 * Private REST — PlaceStopOrder
 * API docs: Futures API → Stop Order Endpoints
 * Run: node examples/StopOrder/PlaceStopOrder.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.placeStopOrder({ symbol: 'BTC_USDT', vol: 1, side: 1, triggerPrice: '50000' })
  .then(printResponse)
  .catch(printError)
