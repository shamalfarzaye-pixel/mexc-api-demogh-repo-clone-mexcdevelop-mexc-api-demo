# Futures examples (Node.js)

Examples are grouped to mirror the **Futures API** English documentation sections.

## How to run

```bash
cd node.js/clients/futures
cp .env.example .env   # fill credentials
node examples/MarketData/Ping.js
```

## Doc section mapping

| API docs section | Examples directory | Auth |
|------------------|-------------------|------|
| Market Data Endpoints | `MarketData/` | public |
| Account and Trading Endpoints | `Account/` | private |
| Order Endpoints | `Order/` | private |
| Position Endpoints | `Position/` | private |
| Plan Order Endpoints | `PlanOrder/` | private |
| Stop Order Endpoints | `StopOrder/` | private |
| Track Order Endpoints | `TrackOrder/` | private |
| Self Trade Prevention Endpoints | `SelfTradePrevention/` | private |
## WebSocket examples

- `WebSocket/Ticker.js` — Public ticker stream (public)

## Endpoint coverage

### Market Data Endpoints → `MarketData/`

- **Ping** → `MarketData/Ping.js` (public)
- **GetTicker** → `MarketData/GetTicker.js` (public)
- **GetDepth** → `MarketData/GetDepth.js` (public)
- **GetContractDetail** → `MarketData/GetContractDetail.js` (public)
- **GetContractDetailCountry** → `MarketData/GetContractDetailCountry.js` (public)
- **GetSupportCurrencies** → `MarketData/GetSupportCurrencies.js` (public)
- **GetDepthCommits** → `MarketData/GetDepthCommits.js` (public)
- **GetIndexPrice** → `MarketData/GetIndexPrice.js` (public)
- **GetFairPrice** → `MarketData/GetFairPrice.js` (public)
- **GetFundingRate** → `MarketData/GetFundingRate.js` (public)
- **GetFundingRateHistory** → `MarketData/GetFundingRateHistory.js` (public)
- **GetKline** → `MarketData/GetKline.js` (public)
- **GetKlineIndexPrice** → `MarketData/GetKlineIndexPrice.js` (public)
- **GetKlineFairPrice** → `MarketData/GetKlineFairPrice.js` (public)
- **GetDeals** → `MarketData/GetDeals.js` (public)
- **GetRiskReverse** → `MarketData/GetRiskReverse.js` (public)
- **GetRiskReverseHistory** → `MarketData/GetRiskReverseHistory.js` (public)

### Account and Trading Endpoints → `Account/`

- **GetAssets** → `Account/GetAssets.js` (private)
- **GetAsset** → `Account/GetAsset.js` (private)
- **GetTransferRecords** → `Account/GetTransferRecords.js` (private)
- **GetProfitRate** → `Account/GetProfitRate.js` (private)
- **GetYesterdayPnl** → `Account/GetYesterdayPnl.js` (private)
- **GetTodayPnl** → `Account/GetTodayPnl.js` (private)
- **GetFeeDeductConfigs** → `Account/GetFeeDeductConfigs.js` (private)
- **GetRiskLimit** → `Account/GetRiskLimit.js` (private)
- **GetFeeRate** → `Account/GetFeeRate.js` (private)
- **GetTieredFeeRate** → `Account/GetTieredFeeRate.js` (private)
- **GetDiscountType** → `Account/GetDiscountType.js` (private)
- **GetAssetAnalysis** → `Account/GetAssetAnalysis.js` (private)
- **GetAssetAnalysisV3** → `Account/GetAssetAnalysisV3.js` (private)
- **GetAssetAnalysisCalendarDaily** → `Account/GetAssetAnalysisCalendarDaily.js` (private)
- **GetAssetAnalysisCalendarMonthly** → `Account/GetAssetAnalysisCalendarMonthly.js` (private)
- **GetAssetAnalysisRecent** → `Account/GetAssetAnalysisRecent.js` (private)
- **GetAssetAnalysisExport** → `Account/GetAssetAnalysisExport.js` (private)
- **GetContractFeeDiscountConfig** → `Account/GetContractFeeDiscountConfig.js` (private)
- **GetOrderDealFeeTotal** → `Account/GetOrderDealFeeTotal.js` (private)
- **GetZeroFeeRate** → `Account/GetZeroFeeRate.js` (private)
- **ChangeRiskLevel** → `Account/ChangeRiskLevel.js` (private)

### Order Endpoints → `Order/`

- **CreateOrder** → `Order/CreateOrder.js` (private)
- **SubmitOrderBatch** → `Order/SubmitOrderBatch.js` (private)
- **CancelOrder** → `Order/CancelOrder.js` (private)
- **CancelAllOrders** → `Order/CancelAllOrders.js` (private)
- **GetOrderDetail** → `Order/GetOrderDetail.js` (private)
- **GetOpenOrders** → `Order/GetOpenOrders.js` (private)
- **GetHistoryOrders** → `Order/GetHistoryOrders.js` (private)
- **GetOrderDealList** → `Order/GetOrderDealList.js` (private)
- **BatchCancelWithExternal** → `Order/BatchCancelWithExternal.js` (private)
- **CancelWithExternal** → `Order/CancelWithExternal.js` (private)
- **ChaseLimitOrder** → `Order/ChaseLimitOrder.js` (private)
- **ChangeLimitOrder** → `Order/ChangeLimitOrder.js` (private)
- **GetOpenOrderTotalCount** → `Order/GetOpenOrderTotalCount.js` (private)
- **GetOrderByExternal** → `Order/GetOrderByExternal.js` (private)
- **BatchQueryOrders** → `Order/BatchQueryOrders.js` (private)
- **BatchQueryWithExternal** → `Order/BatchQueryWithExternal.js` (private)
- **GetCloseOrders** → `Order/GetCloseOrders.js` (private)
- **GetOrderDealDetails** → `Order/GetOrderDealDetails.js` (private)
- **GetOrderFeeDetails** → `Order/GetOrderFeeDetails.js` (private)

### Position Endpoints → `Position/`

- **GetPositions** → `Position/GetPositions.js` (private)
- **GetHistoryPositions** → `Position/GetHistoryPositions.js` (private)
- **GetLeverage** → `Position/GetLeverage.js` (private)
- **GetFundingRecords** → `Position/GetFundingRecords.js` (private)
- **ChangeMargin** → `Position/ChangeMargin.js` (private)
- **ChangeAutoAddIm** → `Position/ChangeAutoAddIm.js` (private)
- **ChangeLeverage** → `Position/ChangeLeverage.js` (private)
- **GetPositionMode** → `Position/GetPositionMode.js` (private)
- **ChangePositionMode** → `Position/ChangePositionMode.js` (private)
- **ReversePosition** → `Position/ReversePosition.js` (private)
- **CloseAllPositions** → `Position/CloseAllPositions.js` (private)

### Plan Order Endpoints → `PlanOrder/`

- **GetPlanOrders** → `PlanOrder/GetPlanOrders.js` (private)
- **PlacePlanOrder** → `PlanOrder/PlacePlanOrder.js` (private)
- **ChangePlanOrderPrice** → `PlanOrder/ChangePlanOrderPrice.js` (private)
- **CancelPlanOrder** → `PlanOrder/CancelPlanOrder.js` (private)
- **CancelAllPlanOrders** → `PlanOrder/CancelAllPlanOrders.js` (private)
- **ChangePlanStopOrder** → `PlanOrder/ChangePlanStopOrder.js` (private)

### Stop Order Endpoints → `StopOrder/`

- **PlaceStopOrder** → `StopOrder/PlaceStopOrder.js` (private)
- **CancelStopOrder** → `StopOrder/CancelStopOrder.js` (private)
- **CancelAllStopOrders** → `StopOrder/CancelAllStopOrders.js` (private)
- **ChangeStopOrderPrice** → `StopOrder/ChangeStopOrderPrice.js` (private)
- **ChangeStopPlanPrice** → `StopOrder/ChangeStopPlanPrice.js` (private)
- **GetStopOrders** → `StopOrder/GetStopOrders.js` (private)
- **GetStopOpenOrders** → `StopOrder/GetStopOpenOrders.js` (private)

### Track Order Endpoints → `TrackOrder/`

- **PlaceTrackOrder** → `TrackOrder/PlaceTrackOrder.js` (private)
- **CancelTrackOrder** → `TrackOrder/CancelTrackOrder.js` (private)
- **ChangeTrackOrder** → `TrackOrder/ChangeTrackOrder.js` (private)
- **GetTrackOrders** → `TrackOrder/GetTrackOrders.js` (private)

### Self Trade Prevention Endpoints → `SelfTradePrevention/`

- **GetStpList** → `SelfTradePrevention/GetStpList.js` (private)
- **GetStpSearch** → `SelfTradePrevention/GetStpSearch.js` (private)
- **CreateStp** → `SelfTradePrevention/CreateStp.js` (private)
- **UpdateStp** → `SelfTradePrevention/UpdateStp.js` (private)
- **DeleteStp** → `SelfTradePrevention/DeleteStp.js` (private)

