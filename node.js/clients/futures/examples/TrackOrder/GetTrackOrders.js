/**
 * Private REST — GetTrackOrders
 * API docs: Futures API → Track Order Endpoints
 * Run: node examples/TrackOrder/GetTrackOrders.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getTrackOrders({ symbol: 'BTC_USDT', page_num: 1, page_size: 20 })
  .then(printResponse)
  .catch(printError)
