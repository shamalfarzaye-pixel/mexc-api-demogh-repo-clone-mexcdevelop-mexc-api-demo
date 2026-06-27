/**
 * Private REST — P2PMerchantOrderDealPost
 * API docs: P2P API → Merchant Endpoints
 * Run: node examples/Merchant/P2PMerchantOrderDealPost.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.p2PMerchantOrderDealPost({ advOrderNo: 'ORDER_ID' })
  .then(printResponse)
  .catch(printError)
