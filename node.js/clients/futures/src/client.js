const { RestAPIClient } = require('./rest')
const { MexcFuturesWsClient } = require('./websocket')
const { normalizeOptions } = require('../../../common/src')

/**
 * Root MEXC Futures connector.
 */
class MexcFutures {
  constructor (apiKey = '', apiSecret = '', options = {}) {
    const opts = normalizeOptions(apiKey, apiSecret, options)
    this.restApi = new RestAPIClient(opts)
    this.wsStreams = new MexcFuturesWsClient(opts)
  }
}

module.exports = MexcFutures
