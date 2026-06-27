/**
 * Private REST — CancelWithExternal
 * API docs: Futures API → Order Endpoints
 * Run: node examples/Order/CancelWithExternal.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.cancelWithExternal({ symbol: 'BTC_USDT', externalOid: 'ext-1' })
  .then(printResponse)
  .catch(printError)
