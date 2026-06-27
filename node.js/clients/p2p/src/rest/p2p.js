const ENDPOINTS = require('./endpoints')

const P2P = superclass => class extends superclass {

  // Get Market Ads List
  p2PMarketAdsPagination(options = {}) {
    return this.signRequest('GET', ENDPOINTS.fiat.FIAT_MARKET_ADS_PAGINATION, options)
  }

  // Get All Order List
  p2PMarketOrderPaginationV2(options = {}) {
    return this.signRequest('GET', ENDPOINTS.fiat.FIAT_MARKET_ORDER_PAGINATIONV2, options)
  }

  // Get My Order List (Maker View)
  p2PMerchantOrderPaginationV2(options = {}) {
    return this.signRequest('GET', ENDPOINTS.fiat.FIAT_MERCHANT_ORDER_PAGINATIONV2, options)
  }

  // Get My Ads List
  p2PMerchantAdsPagination(options = {}) {
    return this.signRequest('GET', ENDPOINTS.fiat.FIAT_MERCHANT_ADS_PAGINATION, options)
  }

  // Get Order Detail
  p2POrderDetail(options = {}) {
    return this.signRequest('GET', ENDPOINTS.fiat.FIAT_ORDER_DETAIL, options)
  }

  // Toggle Business Status
  p2PMerchantServiceSwitchPost(options = {}) {
    return this.signRequest('POST', ENDPOINTS.fiat.FIAT_MERCHANT_SERVICE_SWITCH, options)
  }

  // Create/Update Ad
  p2PMerchantAdsSaveOrUpdatePost(options = {}) {
    return this.signRequest('POST', ENDPOINTS.fiat.FIAT_MERCHANT_ADS_SAVE_OR_UPDATE, options)
  }

  // Download File
  p2PDownloadFile(options = {}) {
    return this.signRequest('GET', ENDPOINTS.fiat.FIAT_DOWNLOADFILE, options)
  }

  // Generate listenKey
  p2PUserDataStreamPost(options = {}) {
    return this.signRequest('POST', ENDPOINTS.listenKey.USERDATASTREAM, options)
  }

  // Get listenKey
  p2PUserDataStream(options = {}) {
    return this.signRequest('GET', ENDPOINTS.listenKey.USERDATASTREAM, options)
  }

  // Get Chat Conversation Info
  p2PRetrieveChatConversation(options = {}) {
    return this.signRequest('GET', ENDPOINTS.fiat.FIAT_RETRIEVECHATCONVERSATION, options)
  }

  // Get Chat Messages
  p2PRetrieveChatMessageWithPagination(options = {}) {
    return this.signRequest('GET', ENDPOINTS.fiat.FIAT_RETRIEVECHATMESSAGEWITHPAGINATION, options)
  }

  // Upload File
  p2PUploadFilePost(options = {}) {
    return this.signRequest('POST', ENDPOINTS.fiat.FIAT_UPLOADFILE, options)
  }

  // Mark Order as Paid
  p2PConfirmPaidPost(options = {}) {
    return this.signRequest('POST', ENDPOINTS.fiat.FIAT_CONFIRM_PAID, options)
  }

  // Create Order
  p2PMerchantOrderDealPost(options = {}) {
    return this.signRequest('POST', ENDPOINTS.fiat.FIAT_MERCHANT_ORDER_DEAL, options)
  }

  // Release Cryptocurrency
  p2PReleaseCoinPost(options = {}) {
    return this.signRequest('POST', ENDPOINTS.fiat.FIAT_RELEASE_COIN, options)
  }

}

module.exports = P2P