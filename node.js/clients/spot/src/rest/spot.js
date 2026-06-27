const ENDPOINTS = require('./endpoints')

const Spot = superclass => class extends superclass {

  /**
   * @V3
   */
  //*行情接口*//
  //测试服务的连通性
  Ping() {
    return this.publicRequest('GET', ENDPOINTS.market.PING)
  }

  //获取服务器时间
  Servertime() {
    return this.publicRequest('GET', ENDPOINTS.market.TIME)
  }

  //交易规范信息
  ExchangeInformation() {
    return this.publicRequest('GET', ENDPOINTS.market.EXCHANGEINFO)
  }

  //API交易对
  ApiDefault() {
    return this.publicRequest('GET', ENDPOINTS.market.DEFAULTSYMBOLS)
  }
 
  //深度信息
  Depth(options = {}) {
    return this.publicRequest(
      'GET',
      ENDPOINTS.market.DEPTH,
      options
    )
  }

  //近期成交列表
  RecentTradesList(options = {}) {
    return this.publicRequest(
      'GET',
      ENDPOINTS.market.TRADES,
      options
    )
  }

  //近期成交（归集）
  CompressedTradesList(options = {}) {
    return this.publicRequest(
      'GET',
      ENDPOINTS.market.AGGTRADES,
      options
    )
  }

  //K线数据
  Kline(options = {}) {
    return this.publicRequest(
      'GET',
      ENDPOINTS.market.KLINES,
      options
    )
  }

  //当前平均价格
  CurrentAveragePrice(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.market.AVGPRICE,
      options
    )
  }

  //24小时价格滚动情况
  TickerPriceChange() {
    return this.publicRequest('GET', ENDPOINTS.market.TICKER_24HR)
  }

  //最新价格
  SymbolPriceTicker() {
    return this.publicRequest('GET', ENDPOINTS.market.TICKER_PRICE)
  }

  //当前最优挂单
  SymbolOrderBook() {
    return this.publicRequest('GET', ENDPOINTS.market.TICKER_BOOKTICKER)
  }

  //查询已下线交易对
  QueryOfflineSymbols(options = {}) {
    return this.publicRequest('GET', ENDPOINTS.market.SYMBOL_OFFLINE, options)
  }

  //获取公告
  GetAnnouncements(options = {}) {
    return this.publicRequest('GET', ENDPOINTS.market.ANNOUNCEMENTS, options)
  }

  //*现货账户和交易接口*//
  //查询账户KYC状态
  KycStatus(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.account.KYC_STATUS,
      options
    )
  }

  //查询UID
  QueryUid(options = {}) {
    return this.signRequest('GET', ENDPOINTS.account.UID, options)
  }

  //API Key信息
  ApiKeyInfo(options = {}) {
    return this.signRequest('POST', ENDPOINTS.account.APIKEYINFO, options)
  }

  //用户API交易对
  SelfSymbol(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.trade.SELFSYMBOLS,
      options
    )
  }

  //测试下单
  TestOrder(options = {}) {
    return this.signRequest(
      'POST',
      ENDPOINTS.order.ORDER_TEST,
      options
    )
  }

  //下单
  Order(options = {}) {
    return this.signRequest(
      'POST',
      ENDPOINTS.order.ORDER,
      options
    )
  }

  //批量下单
  BatchOrders(options = {}) {
    return this.signRequest(
      'POST',
      ENDPOINTS.order.BATCHORDERS,
      options
    )
  }

  //撤销订单
  CancelOrder(options = {}) {
    return this.signRequest(
      'DELETE',
      ENDPOINTS.order.ORDER,
      options
    )
  }

  //撤销单一交易对所有订单
  CancelallOpenOrders(options = {}) {
    return this.signRequest(
      'DELETE',
      ENDPOINTS.order.OPENORDERS,
      options
    )
  }

  //撤销所有订单
  CancelAllOrders(options = {}) {
    return this.signRequest(
      'DELETE',
      ENDPOINTS.order.ORDER_ALL,
      options
    )
  }

  //查询订单
  QueryOrder(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.order.ORDER,
      options
    )
  }

  //当前挂单
  CurrentOpenOrders(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.order.OPENORDERS,
      options
    )
  }

  //查询所有订单
  AllOrders(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.order.ALLORDERS,
      options
    )
  }

  //账户信息
  AccountInformation(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.trade.ACCOUNT,
      options

    )
  }

  //账户成交历史
  AccountTradeList(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.trade.MYTRADES,
      options
    )
  }

  //开启MX抵扣
  MxDeduct(options = {}) {
    return this.signRequest(
      'POST',
      ENDPOINTS.trade.MXDEDUCT_ENABLE,
      options
    )
  }

  //查看MX抵扣状态
  QueryMxDeduct(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.trade.MXDEDUCT_ENABLE,
      options
    )
  }

  //查看手续费率
  TradeFee(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.account.TRADEFEE,
      options
    )
  }

  //创建STP策略组
  CreateStpGroup(options = {}) {
    return this.signRequest('POST', ENDPOINTS.account.STRATEGY_GROUP, options)
  }

  //查询STP策略组
  QueryStpGroup(options = {}) {
    return this.signRequest('GET', ENDPOINTS.account.STRATEGY_GROUP, options)
  }

  //删除STP策略组
  DeleteStpGroup(options = {}) {
    return this.signRequest('DELETE', ENDPOINTS.account.STRATEGY_GROUP, options)
  }

  //添加UID到STP策略组
  AddUidToStpGroup(options = {}) {
    return this.signRequest('POST', ENDPOINTS.account.STRATEGY_GROUP_UID, options)
  }

  //从STP策略组删除UID
  DeleteUidFromStpGroup(options = {}) {
    return this.signRequest('DELETE', ENDPOINTS.account.STRATEGY_GROUP_UID, options)
  }

  //*母子账户接口*//
  //创建子账户
  VirtualSubAccount(options = {}) {
    return this.signRequest(
      'POST',
      ENDPOINTS.subAccount.SUB_ACCOUNT_VIRTUALSUBACCOUNT,
      options
    )
  }

  //查看子账户列表
  SubAccountList(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.subAccount.SUB_ACCOUNT_LIST,
      options
    )
  }

  //创建子账户的APIkey
  VirtualApikey(options = {}) {
    return this.signRequest(
      'POST',
      ENDPOINTS.subAccount.SUB_ACCOUNT_APIKEY,
      options
    )
  }

  //查询子账户的APIkey
  GetApiKey(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.subAccount.SUB_ACCOUNT_APIKEY,
      options
    )
  }

  //删除子账户的APIkey
  DelApikey(options = {}) {
    return this.signRequest(
      'DELETE',
      ENDPOINTS.subAccount.SUB_ACCOUNT_APIKEY,
      options
    )
  }

  //母子用户万向划转
  UniversalTransfer(options = {}) {
    return this.signRequest(
      'POST',
      ENDPOINTS.capital.CAPITAL_SUB_ACCOUNT_UNIVERSALTRANSFER,
      options
    )
  }

  //查询母子万向划转历史
  SubAccountTransferHistory(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.capital.CAPITAL_SUB_ACCOUNT_UNIVERSALTRANSFER,
      options
    )
  }

  //查询子账户资产
  GetAsset(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.subAccount.SUB_ACCOUNT_ASSET,
      options
    )
  }

  //*钱包接口*//
  //查询币种信息
  CoinList(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.capital.CAPITAL_CONFIG_GETALL,
      options
    )
  }

  //提币
  WithDraw(options = {}) {
    return this.signRequest(
      'POST',
      ENDPOINTS.capital.CAPITAL_WITHDRAW,
      options
    )
  }

  //提币(旧接口,即将下线)
  WithdrawApply(options = {}) {
    return this.signRequest(
      'POST',
      ENDPOINTS.capital.CAPITAL_WITHDRAW_APPLY,
      options
    )
  }

  //取消提币
  CancelWithdraw(options = {}) {
    return this.signRequest(
      'DELETE',
      ENDPOINTS.capital.CAPITAL_WITHDRAW,
      options
    )
  }
  //获取充值历史
  DepositHisrec(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.capital.CAPITAL_DEPOSIT_HISREC,
      options
    )
  }

  //获取提币历史
  WithdrawHistory(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.capital.CAPITAL_WITHDRAW_HISTORY,
      options
    )
  }

  //生成充值地址
  GenerateDepositAddress(options = {}) {
    return this.signRequest(
      'POST',
      ENDPOINTS.capital.CAPITAL_DEPOSIT_ADDRESS,
      options
    )
  }

  //获取充值地址
  DepositAddress(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.capital.CAPITAL_DEPOSIT_ADDRESS,
      options
    )
  }

  //获取提币地址
  WithdrawAddress(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.capital.CAPITAL_WITHDRAW_ADDRESS,
      options
    )
  }
  
  //用户万向划转
  Transfer(options = {}) {
    return this.signRequest(
      'POST',
      ENDPOINTS.capital.CAPITAL_TRANSFER,
      options
    )
  }

  //查询用户万向划转历史
  TransferHistory(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.capital.CAPITAL_TRANSFER,
      options
    )
  }

  //查询用户万向划转历史(ID)
  TransferHistoryId(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.capital.CAPITAL_TRANSFER_TRANID,
      options
    )
  }

  //获取小额资产可兑换列表
  Capital(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.capital.CAPITAL_CONVERT_LIST,
      options
    )
  }

  //小额资产兑换
  CapitalConvert(options = {}) {
    return this.signRequest(
      'POST',
      ENDPOINTS.capital.CAPITAL_CONVERT,
      options
    )
  } 

  //查询小额资产兑换历史
  CapitalHistory(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.capital.CAPITAL_CONVERT,
      options
    )
  }
  
  //用户站内转账接口
  TransferInternal(options = {}) {
    return this.signRequest(
      'POST',
      ENDPOINTS.capital.CAPITAL_TRANSFER_INTERNAL,
      options
    )
  } 

  //查询用户内部转账历史接口
  TransferInternalHistory(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.capital.CAPITAL_TRANSFER_INTERNAL,
      options
    )
  } 

  //*邀请返佣接口*//
  //  获取邀请返佣记录
  TaxQuery(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.rebate.REBATE_TAXQUERY,
      options
    )
  }

  // 获取返佣记录明细 （奖励记录）
  RebateDetail(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.rebate.REBATE_DETAIL,
      options
    )
  }

  // 获取自返记录明细 （奖励记录）
  KickBack(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.rebate.REBATE_DETAIL_KICKBACK,
      options
    )
  }

  // 获取邀请人
  ReferCode(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.rebate.REBATE_REFERCODE,
      options
    )
  }

  // 获取代理邀请返佣记录 （代理账户）
  Affiliate(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.rebate.REBATE_AFFILIATE_COMMISSION,
      options
    )
  }

  // 获取代理提现记录 （代理账户）
  AffiliateWithdraw(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.rebate.REBATE_AFFILIATE_WITHDRAW,
      options
    )
  }

  // 获取代理返佣明细 （代理账户）
  AffiliateDetail(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.rebate.REBATE_AFFILIATE_COMMISSION_DETAIL,
      options
    )
  }

  // 查询直客页面数据（代理账户）
  AffiliateReferral(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.rebate.REBATE_AFFILIATE_REFERRAL,
      options
    )
  }

  // 查询子代理页面数据（代理账户）
  AffiliateSubaffiliates(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.rebate.REBATE_AFFILIATE_SUBAFFILIATES,
      options
    )
  }

  // 获取代理活动数据（代理账户）
  AffiliateCampaign(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.rebate.REBATE_AFFILIATE_CAMPAIGN,
      options
    )
  }

  // 获取直属子代理数据（代理账户）
  AffiliateList(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.rebate.REBATE_AFFILIATE_LIST,
      options
    )
  }

  //*Websocket*//
  //创建listenkey
  CreateListenKey(options = {}) {
    return this.signRequest(
      'POST',
      ENDPOINTS.listenKey.USERDATASTREAM,
      options
    )
  }

  //查询有效listenkey
  QueryListenKeys(options = {}) {
    return this.signRequest(
      'GET',
      ENDPOINTS.listenKey.USERDATASTREAM,
      options
    )
  }

  //延长listenkey
  KeepListenKey(options = {}) {
    return this.signRequest(
      'PUT',
      ENDPOINTS.listenKey.USERDATASTREAM,
      options
    )
  } 

  //关闭listenkey
  CloseListenKey(options = {}) {
    return this.signRequest(
      'DELETE',
      ENDPOINTS.listenKey.USERDATASTREAM,
      options
    )
  } 
}

module.exports = Spot
