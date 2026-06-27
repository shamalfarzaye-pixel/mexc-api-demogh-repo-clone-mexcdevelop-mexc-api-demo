/**
 * Private REST — GetOrderDealDetails
 * API docs: Futures API → Order Endpoints
 * Run: node examples/Order/GetOrderDealDetails.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getOrderDealDetails({ symbol: 'BTC_USDT', orderId: '1' })
  .then(printResponse)
  .catch(printError)
