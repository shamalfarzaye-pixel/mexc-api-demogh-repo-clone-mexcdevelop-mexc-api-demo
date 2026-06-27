/**
 * Private REST — MxDeduct (MxDeduct)
 * API docs: Spot v3 API → Trading Endpoints
 * Run: node examples/Trading/MxDeduct.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.MxDeduct({ mxDeductEnable: true })
  .then(printResponse)
  .catch(printError)
