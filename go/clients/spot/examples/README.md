# Spot examples (Go)

Examples are grouped to mirror the **Spot v3 API** English documentation sections.

## How to run

```bash
cd node.js/clients/spot
cp .env.example .env   # fill credentials
node examples/MarketData/Ping.js
```

## Doc section mapping

| API docs section | Examples directory | Auth |
|------------------|-------------------|------|
| Market Data Endpoints | `MarketData/` | public + private |
| Account Endpoints | `Account/` | private |
| Trading Endpoints | `Trading/` | private |
| Wallet Endpoints | `Wallet/` | private |
| Sub-Account Endpoints | `SubAccount/` | private |
| User Data Stream (Listen Key) Endpoints | `UserDataStream/` | private |
| Rebate Endpoints | `Rebate/` | private |

## WebSocket examples

- `WebSocket/ProtobufStream.go` — Public protobuf market stream (public)
- `WebSocket/PrivateUserDataStream.go` — Private user data via listen key (private)

## Endpoint coverage

### Market Data Endpoints → `MarketData/`

- **Ping** → `MarketData/Ping.js` (public)
- **Time** → `MarketData/Servertime.js` (public)
- **ApiSymbol** → `MarketData/ApiDefault.js` (public)
- **ExchangeInfo** → `MarketData/ExchangeInformation.js` (public)
- **Depth** → `MarketData/Depth.js` (public)
- **Trades** → `MarketData/RecentTradesList.js` (public)
- **AggTrades** → `MarketData/CompressedTradesList.js` (public)
- **Kline** → `MarketData/Kline.js` (public)
- **AvgPrice** → `MarketData/CurrentAveragePrice.js` (private)
- **Ticker24hr** → `MarketData/TickerPriceChange.js` (public)
- **Price** → `MarketData/SymbolPriceTicker.js` (public)
- **BookTicker** → `MarketData/SymbolOrderBook.js` (public)
- **QueryOfflineSymbols** → `MarketData/QueryOfflineSymbols.js` (public)
- **GetAnnouncements** → `MarketData/GetAnnouncements.js` (public)

### Account Endpoints → `Account/`

- **KycStatus** → `Account/KycStatus.js` (private)
- **QueryUid** → `Account/QueryUid.js` (private)
- **ApiKeyInfo** → `Account/ApiKeyInfo.js` (private)
- **TradeFee** → `Account/TradeFee.js` (private)
- **CreateStpGroup** → `Account/CreateStpGroup.js` (private)
- **QueryStpGroup** → `Account/QueryStpGroup.js` (private)
- **DeleteStpGroup** → `Account/DeleteStpGroup.js` (private)
- **AddUidToStpGroup** → `Account/AddUidToStpGroup.js` (private)
- **DeleteUidFromStpGroup** → `Account/DeleteUidFromStpGroup.js` (private)

### Trading Endpoints → `Trading/`

- **SelfSymbols** → `Trading/SelfSymbol.js` (private)
- **TestOrder** → `Trading/TestOrder.js` (private)
- **PlaceOrder** → `Trading/Order.js` (private)
- **BatchOrder** → `Trading/BatchOrders.js` (private)
- **CancelOrder** → `Trading/CancelOrder.js` (private)
- **CancelAllOrders** → `Trading/CancelallOpenOrders.js` (private)
- **CancelAllOrdersAll** → `Trading/CancelAllOrders.js` (private)
- **QueryOrder** → `Trading/QueryOrder.js` (private)
- **OpenOrder** → `Trading/CurrentOpenOrders.js` (private)
- **AllOrders** → `Trading/AllOrders.js` (private)
- **SpotAccountInfo** → `Trading/AccountInformation.js` (private)
- **SpotmyTrade** → `Trading/AccountTradeList.js` (private)
- **MxDeduct** → `Trading/MxDeduct.js` (private)
- **QueryMxDeduct** → `Trading/QueryMxDeduct.js` (private)

### Wallet Endpoints → `Wallet/`

- **QueryCurrencyInfo** → `Wallet/CoinList.js` (private)
- **Withdraw** → `Wallet/WithDraw.js` (private)
- **WithdrawApply** → `Wallet/WithdrawApply.js` (private)
- **CancelWithdraw** → `Wallet/CancelWithdraw.js` (private)
- **DepositHistory** → `Wallet/DepositHisrec.js` (private)
- **WithdrawHistory** → `Wallet/WithdrawHistory.js` (private)
- **GenDepositAddress** → `Wallet/GenerateDepositAddress.js` (private)
- **DepositAddress** → `Wallet/DepositAddress.js` (private)
- **WithdrawAddress** → `Wallet/WithdrawAddress.js` (private)
- **Transfer** → `Wallet/Transfer.js` (private)
- **TransferHistory** → `Wallet/TransferHistory.js` (private)
- **TransferHistoryById** → `Wallet/TransferHistoryId.js` (private)
- **ConvertList** → `Wallet/Capital.js` (private)
- **Convert** → `Wallet/CapitalConvert.js` (private)
- **ConvertHistory** → `Wallet/CapitalHistory.js` (private)
- **InternalTransfer** → `Wallet/TransferInternal.js` (private)
- **InternalTransferHistory** → `Wallet/TransferInternalHistory.js` (private)

### Sub-Account Endpoints → `SubAccount/`

- **CreateSub** → `SubAccount/VirtualSubAccount.js` (private)
- **QuerySub** → `SubAccount/SubAccountList.js` (private)
- **CreateSubApikey** → `SubAccount/VirtualApikey.js` (private)
- **QuerySubApikey** → `SubAccount/GetApiKey.js` (private)
- **DeleteSubApikey** → `SubAccount/DelApikey.js` (private)
- **UniTransfer** → `SubAccount/UniversalTransfer.js` (private)
- **QueryUniTransfer** → `SubAccount/SubAccountTransferHistory.js` (private)
- **QuerySubAsset** → `SubAccount/GetAsset.js` (private)

### User Data Stream (Listen Key) Endpoints → `UserDataStream/`

- **CreateListenKey** → `UserDataStream/CreateListenKey.js` (private)
- **QueryListenKeys** → `UserDataStream/QueryListenKeys.js` (private)
- **KeepListenKey** → `UserDataStream/KeepListenKey.js` (private)
- **CloseListenKey** → `UserDataStream/CloseListenKey.js` (private)

### Rebate Endpoints → `Rebate/`

- **RebateHistory** → `Rebate/TaxQuery.js` (private)
- **RebateDetail** → `Rebate/RebateDetail.js` (private)
- **SelfRecordsDetail** → `Rebate/KickBack.js` (private)
- **ReferCode** → `Rebate/ReferCode.js` (private)
- **AffiliateCommission** → `Rebate/Affiliate.js` (private)
- **AffiliateWithdraw** → `Rebate/AffiliateWithdraw.js` (private)
- **AffiliateCommissionDetail** → `Rebate/AffiliateDetail.js` (private)
- **AffiliateReferral** → `Rebate/AffiliateReferral.js` (private)
- **Subaffiliates** → `Rebate/AffiliateSubaffiliates.js` (private)
- **AffiliateCampaign** → `Rebate/AffiliateCampaign.js` (private)
- **AffiliateList** → `Rebate/AffiliateList.js` (private)

