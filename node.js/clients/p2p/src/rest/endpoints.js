/**
 * MEXC P2P REST path constants.
 * Align with go/clients/p2p/endpoints.go
 */

const PREFIX = '/api/v3'

module.exports = {
  PREFIX,
  fiat: {
    FIAT_CONFIRM_PAID: '/api/v3/fiat/confirm_paid',
    FIAT_DOWNLOADFILE: '/api/v3/fiat/downloadFile',
    FIAT_MARKET_ADS_PAGINATION: '/api/v3/fiat/market/ads/pagination',
    FIAT_MARKET_ORDER_PAGINATIONV2: '/api/v3/fiat/market/order/paginationV2',
    FIAT_MERCHANT_ADS_PAGINATION: '/api/v3/fiat/merchant/ads/pagination',
    FIAT_MERCHANT_ADS_SAVE_OR_UPDATE: '/api/v3/fiat/merchant/ads/save_or_update',
    FIAT_MERCHANT_ORDER_DEAL: '/api/v3/fiat/merchant/order/deal',
    FIAT_MERCHANT_ORDER_PAGINATIONV2: '/api/v3/fiat/merchant/order/paginationV2',
    FIAT_MERCHANT_SERVICE_SWITCH: '/api/v3/fiat/merchant/service/switch',
    FIAT_ORDER_DETAIL: '/api/v3/fiat/order/detail',
    FIAT_RELEASE_COIN: '/api/v3/fiat/release_coin',
    FIAT_RETRIEVECHATCONVERSATION: '/api/v3/fiat/retrieveChatConversation',
    FIAT_RETRIEVECHATMESSAGEWITHPAGINATION: '/api/v3/fiat/retrieveChatMessageWithPagination',
    FIAT_UPLOADFILE: '/api/v3/fiat/uploadFile',
  },
  listenKey: {
    USERDATASTREAM: '/api/v3/userDataStream',
  },
}
