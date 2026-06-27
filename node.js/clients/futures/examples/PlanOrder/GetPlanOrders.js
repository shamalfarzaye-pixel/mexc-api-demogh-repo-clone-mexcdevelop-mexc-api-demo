/**
 * Private REST — GetPlanOrders
 * API docs: Futures API → Plan Order Endpoints
 * Run: node examples/PlanOrder/GetPlanOrders.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getPlanOrders({ symbol: 'BTC_USDT', start_time: 1700000000000, end_time: 1700086400000, page_num: 1, page_size: 20 })
  .then(printResponse)
  .catch(printError)
