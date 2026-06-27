/**
 * Private REST — P2PMerchantOrderPaginationV2
 * API docs: P2P API → Merchant Endpoints
 * Run: node examples/Merchant/P2PMerchantOrderPaginationV2.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.p2PMerchantOrderPaginationV2({ page: '1', pageSize: '10' })
  .then(printResponse)
  .catch(printError)
