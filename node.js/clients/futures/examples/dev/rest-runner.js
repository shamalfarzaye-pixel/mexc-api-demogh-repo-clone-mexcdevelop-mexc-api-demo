/**
 * Dev-only REST verification script. Run: npm run example:rest-runner --prefix clients/futures
 *
 * Examples:
 * - getTicker       -> { method: 'getTicker', params: { symbol: 'BTC_USDT' } }
 * - getFundingRateHistory -> { method: 'getFundingRateHistory', params: { symbol: 'BTC_USDT', page_num: 1, page_size: 20 } }
 * - getAssets       -> { method: 'getAssets', params: {} }
 * - submitOrder     -> { method: 'submitOrder', params: { symbol, vol, side, type, openType, leverage, ... } }
 * - getStpGroups    -> { method: 'getStpGroups', params: {} } or params: { configName: 'group_id' }
 * - getCurrentUserStpGroup -> { method: 'getCurrentUserStpGroup', params: {} }
 * - createStpGroup  -> { method: 'createStpGroup', params: { configName: 'stpconf001', blacklist: ['uid1', 'uid2'] } }
 */

require('dotenv').config({ path: require('path').resolve(__dirname, '../../../.env') })

const { MexcFutures } = require('../../../src')

// Editable target: method (required), params (optional, default {}), note (optional)
const target = {
  method: 'submit_order',
  params: {
    symbol: 'BTC_USDT',
    price: 63000,
    vol: 1,
    side: 1,
    type: 1,
    openType: 1,
    leverage: 20
  }
}
// market: ping, getServerTime, getSupportCurrencies, getContractDetail, getTicker, getDepth, getDepthCommits,
//   getIndexPrice, getFairPrice, getFundingRate, getFundingRateHistory, getKline, getDeals, getRiskReverse, getRiskReverseHistory
// account: getAssets, getAsset, getTransferRecords, getProfitRate, getYesterdayPnl, getTodayPnl,
//   getFeeDeductConfigs, getRiskLimit, getFeeRate, getTieredFeeRate, getDiscountType,
//   getAssetAnalysisV3, getContractFeeDiscountConfig, getOrderDealFeeTotal, getAssetAnalysisExport
// order: getOpenOrders, getHistoryOrders, getCloseOrders, getOrderDetail, getOpenOrderTotalCount,
//   getOrderDealList, cancelOrder, cancelAllOrders, submitOrder
// position: getPositions, getHistoryPositions, getLeverage, getPositionMode, reversePosition, closeAllPositions, changeMargin, changeLeverage
// plan: getPlanOrders, placePlanOrder, cancelPlanOrder, cancelAllPlanOrders
// stop: getStopOrders, getStopOpenOrders, placeStopOrder, cancelStopOrder
// stp: getStpGroups, getCurrentUserStpGroup, createStpGroup, updateStpGroup, deleteStpGroup (market maker only)
// submitOrder params: symbol, price?, vol, side, type, openType?, leverage?; side: 1 open long 2 close short 3 open short 4 close long; type: 1 limit 2 PostOnly 3 IOC 4 FOK 5 market; openType: 1 isolated 2 cross

/**
 * Call SDK method by name; adapters map params to positional args where needed; others use client[method](params).
 */
function callApiMethod (restApi, method, params) {
  const p = params || {}

  const adapters = {
    getTicker: () => restApi.getTicker(p.symbol),
    getDepth: () => {
      if (p.symbol == null || p.symbol === '') throw new Error('getDepth requires params.symbol')
      return restApi.getDepth(p.symbol, p.limit ?? 20)
    },
    getContractDetail: () => restApi.getContractDetail(p.symbol),
    getDepthCommits: () => {
      if (p.symbol == null || p.symbol === '') throw new Error('getDepthCommits requires params.symbol')
      if (p.limit == null) throw new Error('getDepthCommits requires params.limit')
      return restApi.getDepthCommits(p.symbol, p.limit)
    },
    getIndexPrice: () => {
      if (p.symbol == null || p.symbol === '') throw new Error('getIndexPrice requires params.symbol')
      return restApi.getIndexPrice(p.symbol)
    },
    getFairPrice: () => {
      if (p.symbol == null || p.symbol === '') throw new Error('getFairPrice requires params.symbol')
      return restApi.getFairPrice(p.symbol)
    },
    getFundingRate: () => {
      if (p.symbol == null || p.symbol === '') throw new Error('getFundingRate requires params.symbol')
      return restApi.getFundingRate(p.symbol)
    },
    getFundingRateHistory: () => {
      if (p.symbol == null || p.symbol === '') throw new Error('getFundingRateHistory requires params.symbol')
      return restApi.getFundingRateHistory(p)
    },
    getRiskReverseHistory: () => {
      if (p.symbol == null || p.symbol === '') throw new Error('getRiskReverseHistory requires params.symbol')
      return restApi.getRiskReverseHistory(p)
    },
    getKline: () => {
      if (p.symbol == null || p.symbol === '') throw new Error('getKline requires params.symbol')
      return restApi.getKline(p.symbol, { interval: p.interval, start: p.start, end: p.end })
    },
    getKlineIndexPrice: () => {
      if (p.symbol == null || p.symbol === '') throw new Error('getKlineIndexPrice requires params.symbol')
      return restApi.getKlineIndexPrice(p.symbol, { interval: p.interval, start: p.start, end: p.end })
    },
    getKlineFairPrice: () => {
      if (p.symbol == null || p.symbol === '') throw new Error('getKlineFairPrice requires params.symbol')
      return restApi.getKlineFairPrice(p.symbol, { interval: p.interval, start: p.start, end: p.end })
    },
    getDeals: () => {
      if (p.symbol == null || p.symbol === '') throw new Error('getDeals requires params.symbol')
      return restApi.getDeals(p.symbol, p.limit ?? 100)
    },
    getRiskReverse: () => restApi.getRiskReverse(p.symbol),
    getAsset: () => {
      if (p.currency == null || p.currency === '') throw new Error('getAsset requires params.currency')
      return restApi.getAsset(p)
    },
    getProfitRate: () => {
      if (p.type == null) throw new Error('getProfitRate requires params.type (1: day, 2: week)')
      return restApi.getProfitRate(p)
    },
    getTransferRecords: () => restApi.getTransferRecords(p),
    getAssets: () => restApi.getAssets(),
    getPositions: () => restApi.getPositions(p),
    getLeverage: () => {
      if (p.symbol == null || p.symbol === '') throw new Error('getLeverage requires params.symbol')
      return restApi.getLeverage(p)
    }
  }

  const adapter = adapters[method]
  if (adapter) return adapter()
  return restApi[method](p)
}

const apiKey = process.env.MEXC_API_KEY || ''
const apiSecret = process.env.MEXC_API_SECRET || ''

const connector = new MexcFutures({
  apiKey,
  apiSecret,
  timeoutMs: 10000,
  recvWindow: 10000
})

async function main () {
  const method = target.method
  const params = target.params != null && typeof target.params === 'object' ? target.params : {}

  const fn = connector.restApi[method]
  if (typeof fn !== 'function') {
    throw new Error('RestAPIClient.' + method + ' method not found')
  }

  console.log('method:', method)
  if (target.note) console.log('note:', target.note)
  console.log('params:')
  console.dir(params, { depth: null, colors: true })

  const resp = await callApiMethod(connector.restApi, method, params)

  console.log('\n--- MEXC raw response ---')
  console.dir(resp, { depth: null, colors: true })
}

main().catch(err => {
  console.error('err.message:', err.message)
  if (err.code != null) console.error('err.code:', err.code)
  if (err.status != null) console.error('err.status:', err.status)
  if (err.response != null) {
    console.error('err.response:')
    console.dir(err.response, { depth: null, colors: true })
  }
  if (err.data != null) {
    console.error('err.data:')
    console.dir(err.data, { depth: null, colors: true })
  }
  process.exit(1)
})
