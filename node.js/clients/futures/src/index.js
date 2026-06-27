/**
 * MEXC Futures SDK
 */

const MexcFutures = require('./client')
const { RestAPIClient } = require('./rest')
const { MexcFuturesWsClient, DEFAULT_WS_URL } = require('./websocket')
const ENDPOINTS = require('./rest/endpoints')
const {
  sign,
  filterParams,
  buildQueryStringForSign,
  buildJsonStringForSign
} = require('./rest/signer')
const {
  request,
  publicRequest,
  privateRequest,
  DEFAULT_BASE_URL,
  DEFAULT_RECV_WINDOW,
  paramsToQueryString
} = require('./rest/httpClient')

module.exports = MexcFutures
module.exports.MexcFutures = MexcFutures
module.exports.RestAPIClient = RestAPIClient
module.exports.MexcFuturesWsClient = MexcFuturesWsClient
module.exports.DEFAULT_WS_URL = DEFAULT_WS_URL
module.exports.ENDPOINTS = ENDPOINTS
module.exports.DEFAULT_BASE_URL = DEFAULT_BASE_URL
module.exports.DEFAULT_RECV_WINDOW = DEFAULT_RECV_WINDOW
module.exports.signer = { sign, filterParams, buildQueryStringForSign, buildJsonStringForSign }
module.exports.httpClient = {
  request,
  publicRequest,
  privateRequest,
  DEFAULT_BASE_URL,
  DEFAULT_RECV_WINDOW,
  paramsToQueryString
}
module.exports.sign = sign
module.exports.filterParams = filterParams
module.exports.request = request
module.exports.publicRequest = publicRequest
module.exports.privateRequest = privateRequest
