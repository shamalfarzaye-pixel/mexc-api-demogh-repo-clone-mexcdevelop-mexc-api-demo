/**
 * Private REST — P2PMerchantServiceSwitchPost
 * API docs: P2P API → Merchant Endpoints
 * Run: node examples/Merchant/P2PMerchantServiceSwitchPost.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.p2PMerchantServiceSwitchPost({ serviceSwitch: true })
  .then(printResponse)
  .catch(printError)
