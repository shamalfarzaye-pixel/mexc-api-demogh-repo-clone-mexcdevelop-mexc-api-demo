/**
 * Private REST — SubmitOrderBatch
 * API docs: Futures API → Order Endpoints
 * Run: node examples/Order/SubmitOrderBatch.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.submitOrderBatch([])
  .then(printResponse)
  .catch(printError)
