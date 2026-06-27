/**
 * Private REST — GetTransferRecords
 * API docs: Futures API → Account and Trading Endpoints
 * Run: node examples/Account/GetTransferRecords.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.restApi.getTransferRecords({ page_num: 1, page_size: 20 })
  .then(printResponse)
  .catch(printError)
