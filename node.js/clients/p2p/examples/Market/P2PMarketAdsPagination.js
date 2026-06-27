/**
 * Private REST — P2PMarketAdsPagination
 * API docs: P2P API → Market Endpoints
 * Run: node examples/Market/P2PMarketAdsPagination.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.p2PMarketAdsPagination({ page: '1', pageSize: '10' })
  .then(printResponse)
  .catch(printError)
