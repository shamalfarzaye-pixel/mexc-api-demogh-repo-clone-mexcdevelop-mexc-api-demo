/**
 * Private REST — P2PMerchantAdsPagination
 * API docs: P2P API → Merchant Endpoints
 * Run: node examples/Merchant/P2PMerchantAdsPagination.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.p2PMerchantAdsPagination({ page: '1', pageSize: '10' })
  .then(printResponse)
  .catch(printError)
