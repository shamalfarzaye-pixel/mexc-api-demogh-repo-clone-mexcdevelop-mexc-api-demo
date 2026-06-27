/**
 * Private REST — PlacePlanOrder
 * API docs: Futures API → Plan Order Endpoints
 * Run: node examples/PlanOrder/PlacePlanOrder.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.placePlanOrder({ symbol: 'BTC_USDT', vol: 1, side: 1, triggerPrice: '50000', triggerType: 1 })
  .then(printResponse)
  .catch(printError)
