/**
 * Private REST — SelfSymbols (SelfSymbol)
 * API docs: Spot v3 API → Trading Endpoints
 * Run: node examples/Trading/SelfSymbol.js
 */
const { createPrivateClient, printResponse, printError } = require('../_lib')

const client = createPrivateClient()

client.SelfSymbol()
  .then(printResponse)
  .catch(printError)
