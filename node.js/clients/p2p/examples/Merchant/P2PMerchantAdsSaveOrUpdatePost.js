/**
 * Private REST — P2PMerchantAdsSaveOrUpdatePost
 * API docs: P2P API → Merchant Endpoints
 * Run: node examples/Merchant/P2PMerchantAdsSaveOrUpdatePost.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.p2PMerchantAdsSaveOrUpdatePost({ id: 'AD_ID' })
  .then(printResponse)
  .catch(printError)
