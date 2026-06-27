/**
 * MEXC SPOT REST path constants.
 * Align with go/clients/spot/endpoints.go
 */

const PREFIX = '/api/v3'

module.exports = {
  PREFIX,
  account: {
    APIKEYINFO: '/api/v3/apiKeyInfo',
    KYC_STATUS: '/api/v3/kyc/status',
    STRATEGY_GROUP: '/api/v3/strategy/group',
    STRATEGY_GROUP_UID: '/api/v3/strategy/group/uid',
    TRADEFEE: '/api/v3/tradeFee',
    UID: '/api/v3/uid',
  },
  capital: {
    CAPITAL_CONFIG_GETALL: '/api/v3/capital/config/getall',
    CAPITAL_CONVERT: '/api/v3/capital/convert',
    CAPITAL_CONVERT_LIST: '/api/v3/capital/convert/list',
    CAPITAL_DEPOSIT_ADDRESS: '/api/v3/capital/deposit/address',
    CAPITAL_DEPOSIT_HISREC: '/api/v3/capital/deposit/hisrec',
    CAPITAL_SUB_ACCOUNT_UNIVERSALTRANSFER: '/api/v3/capital/sub-account/universalTransfer',
    CAPITAL_TRANSFER: '/api/v3/capital/transfer',
    CAPITAL_TRANSFER_INTERNAL: '/api/v3/capital/transfer/internal',
    CAPITAL_TRANSFER_TRANID: '/api/v3/capital/transfer/tranId',
    CAPITAL_WITHDRAW: '/api/v3/capital/withdraw',
    CAPITAL_WITHDRAW_ADDRESS: '/api/v3/capital/withdraw/address',
    CAPITAL_WITHDRAW_APPLY: '/api/v3/capital/withdraw/apply',
    CAPITAL_WITHDRAW_HISTORY: '/api/v3/capital/withdraw/history',
  },
  listenKey: {
    USERDATASTREAM: '/api/v3/userDataStream',
  },
  market: {
    AGGTRADES: '/api/v3/aggTrades',
    ANNOUNCEMENTS: '/api/v3/announcements',
    AVGPRICE: '/api/v3/avgPrice',
    DEFAULTSYMBOLS: '/api/v3/defaultSymbols',
    DEPTH: '/api/v3/depth',
    EXCHANGEINFO: '/api/v3/exchangeInfo',
    KLINES: '/api/v3/klines',
    PING: '/api/v3/ping',
    SYMBOL_OFFLINE: '/api/v3/symbol/offline',
    TICKER_24HR: '/api/v3/ticker/24hr',
    TICKER_BOOKTICKER: '/api/v3/ticker/bookTicker',
    TICKER_PRICE: '/api/v3/ticker/price',
    TIME: '/api/v3/time',
    TRADES: '/api/v3/trades',
  },
  order: {
    ALLORDERS: '/api/v3/allOrders',
    BATCHORDERS: '/api/v3/batchOrders',
    OPENORDERS: '/api/v3/openOrders',
    ORDER: '/api/v3/order',
    ORDER_ALL: '/api/v3/order/all',
    ORDER_TEST: '/api/v3/order/test',
  },
  rebate: {
    REBATE_AFFILIATE_CAMPAIGN: '/api/v3/rebate/affiliate/campaign',
    REBATE_AFFILIATE_COMMISSION: '/api/v3/rebate/affiliate/commission',
    REBATE_AFFILIATE_COMMISSION_DETAIL: '/api/v3/rebate/affiliate/commission/detail',
    REBATE_AFFILIATE_LIST: '/api/v3/rebate/affiliate/list',
    REBATE_AFFILIATE_REFERRAL: '/api/v3/rebate/affiliate/referral',
    REBATE_AFFILIATE_SUBAFFILIATES: '/api/v3/rebate/affiliate/subaffiliates',
    REBATE_AFFILIATE_WITHDRAW: '/api/v3/rebate/affiliate/withdraw',
    REBATE_DETAIL: '/api/v3/rebate/detail',
    REBATE_DETAIL_KICKBACK: '/api/v3/rebate/detail/kickback',
    REBATE_REFERCODE: '/api/v3/rebate/referCode',
    REBATE_TAXQUERY: '/api/v3/rebate/taxQuery',
  },
  subAccount: {
    SUB_ACCOUNT_APIKEY: '/api/v3/sub-account/apiKey',
    SUB_ACCOUNT_ASSET: '/api/v3/sub-account/asset',
    SUB_ACCOUNT_LIST: '/api/v3/sub-account/list',
    SUB_ACCOUNT_VIRTUALSUBACCOUNT: '/api/v3/sub-account/virtualSubAccount',
  },
  trade: {
    ACCOUNT: '/api/v3/account',
    MXDEDUCT_ENABLE: '/api/v3/mxDeduct/enable',
    MYTRADES: '/api/v3/myTrades',
    SELFSYMBOLS: '/api/v3/selfSymbols',
  },
}
