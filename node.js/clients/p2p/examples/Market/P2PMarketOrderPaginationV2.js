/**
 * Private REST — P2PMarketOrderPaginationV2
 * API docs: P2P API → Market Endpoints
 * Run: node examples/Market/P2PMarketOrderPaginationV2.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.p2PMarketOrderPaginationV2({ page: '1', pageSize: '10' })
  .then(printResponse)
  .catch(printError)
