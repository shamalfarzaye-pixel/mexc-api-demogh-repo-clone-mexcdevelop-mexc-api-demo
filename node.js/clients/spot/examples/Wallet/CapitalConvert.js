/**
 * Private REST — Convert (CapitalConvert)
 * API docs: Spot v3 API → Wallet Endpoints
 * Run: node examples/Wallet/CapitalConvert.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.CapitalConvert({ fromAsset: 'USDT', toAsset: 'BTC', fromAmount: '10' })
  .then(printResponse)
  .catch(printError)
