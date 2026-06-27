package futures

import (
	"context"
	"fmt"
	"strconv"
)

// RestAPI — Account endpoints.
// @endpoint GET /api/v1/private/account/assets
func (c *RestAPI) GetAssets(ctx context.Context) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "GET", PathAccountAssets, nil)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetPositions returns open positions (private). params can include symbol, page_num, page_size, etc.
// @endpoint GET /api/v1/private/account/asset/{currency}
func (c *RestAPI) GetAsset(ctx context.Context, params map[string]any) (*RawResponse, error) {
	currency := getStringParam(params, "currency")
	if currency == "" {
		return nil, fmt.Errorf("params.currency required")
	}
	path := PathAccountAsset + "/" + currency
	resp, err := c.http.PrivateRequest(ctx, "GET", path, nil)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetTransferRecords returns transfer records. Params may include currency, state, type, page_num, page_size.
// @endpoint GET /api/v1/private/account/transfer_record
func (c *RestAPI) GetTransferRecords(ctx context.Context, params map[string]any) (*RawResponse, error) {
	p := toInterfaceMap(params)
	if p != nil {
		if err := CheckPage(getIntParam(params, "page_num"), getIntParam(params, "page_size"), 100); err != nil {
			if getIntParam(params, "page_num") != 0 || getIntParam(params, "page_size") != 0 {
				return nil, err
			}
		}
	}
	resp, err := c.http.PrivateRequest(ctx, "GET", PathTransferRecord, p)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetProfitRate returns profit rate. Params must include "type" (1: day, 2: week).
// @endpoint GET /api/v1/private/account/profit_rate/{type}
func (c *RestAPI) GetProfitRate(ctx context.Context, params map[string]any) (*RawResponse, error) {
	typ := getIntParam(params, "type")
	if typ == 0 {
		return nil, fmt.Errorf("params.type required (1: day, 2: week)")
	}
	path := PathProfitRate + "/" + strconv.Itoa(typ)
	resp, err := c.http.PrivateRequest(ctx, "GET", path, nil)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetYesterdayPnl returns yesterday PnL (POST, no body).
// @endpoint POST /api/v1/private/account/asset/analysis/yesterday_pnl
func (c *RestAPI) GetYesterdayPnl(ctx context.Context) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "POST", PathYesterdayPnl, map[string]interface{}{})
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetTodayPnl returns today PnL. Params may include reverse, includeUnrealisedPnl.
// @endpoint GET /api/v1/private/account/asset/analysis/today_pnl
func (c *RestAPI) GetTodayPnl(ctx context.Context, params map[string]any) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "GET", PathTodayPnl, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetFeeDeductConfigs returns fee deduct configs.
// @endpoint GET /api/v1/private/account/feeDeductConfigs
func (c *RestAPI) GetFeeDeductConfigs(ctx context.Context) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "GET", PathFeeDeductConfigs, nil)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetRiskLimit returns risk limit. Params may include symbol.
// @endpoint GET /api/v1/private/account/risk_limit
func (c *RestAPI) GetRiskLimit(ctx context.Context, params map[string]any) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "GET", PathRiskLimit, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetFeeRate returns contract fee rate. Params may include symbol.
// @endpoint GET /api/v1/private/account/contract/fee_rate
func (c *RestAPI) GetFeeRate(ctx context.Context, params map[string]any) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "GET", PathContractFeeRate, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetTieredFeeRate returns tiered fee rate. Params may include symbol.
// @endpoint GET /api/v1/private/account/tiered_fee_rate/v2
func (c *RestAPI) GetTieredFeeRate(ctx context.Context, params map[string]any) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "GET", PathTieredFeeRate, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetDiscountType returns user discount type.
// @endpoint GET /api/v1/private/account/discountType
func (c *RestAPI) GetDiscountType(ctx context.Context) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "GET", PathDiscountType, nil)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetAssetAnalysis returns asset analysis for a currency and period type.
// @endpoint GET /api/v1/private/account/asset/analysis/{type}
func (c *RestAPI) GetAssetAnalysis(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if getStringParam(params, "currency") == "" {
		return nil, fmt.Errorf("params.currency required")
	}
	typ := getIntParam(params, "type")
	if typ == 0 {
		return nil, fmt.Errorf("params.type required")
	}
	path := PathAssetAnalysis + "/" + strconv.Itoa(typ)
	body := map[string]interface{}{
		"currency":  getStringParam(params, "currency"),
		"startTime": params["startTime"],
		"endTime":   params["endTime"],
	}
	resp, err := c.http.PrivateRequest(ctx, "GET", path, body)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetAssetAnalysisV3 returns asset analysis v3.
// @endpoint POST /api/v1/private/account/asset/analysis/v3
func (c *RestAPI) GetAssetAnalysisV3(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if params == nil || params["startTime"] == nil || params["endTime"] == nil {
		return nil, fmt.Errorf("params.startTime and params.endTime required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathAssetAnalysisV3, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetAssetAnalysisCalendarDaily returns daily calendar asset analysis v3.
// @endpoint POST /api/v1/private/account/asset/analysis/calendar/daily/v3
func (c *RestAPI) GetAssetAnalysisCalendarDaily(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if params == nil || params["startTime"] == nil || params["endTime"] == nil {
		return nil, fmt.Errorf("params.startTime and params.endTime required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathAssetAnalysisCalendarDailyV3, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetAssetAnalysisCalendarMonthly returns monthly calendar asset analysis v3.
// @endpoint POST /api/v1/private/account/asset/analysis/calendar/monthly/v3
func (c *RestAPI) GetAssetAnalysisCalendarMonthly(ctx context.Context, params map[string]any) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "POST", PathAssetAnalysisCalendarMonthlyV3, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetAssetAnalysisRecent returns recent asset analysis v3.
// @endpoint POST /api/v1/private/account/asset/analysis/recent/v3
func (c *RestAPI) GetAssetAnalysisRecent(ctx context.Context, params map[string]any) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "POST", PathAssetAnalysisRecentV3, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetAssetAnalysisExport exports asset analysis report. Extra headers may include timezone-login.
// @endpoint GET /api/v1/private/account/asset/analysis/export
func (c *RestAPI) GetAssetAnalysisExport(ctx context.Context, params map[string]any, extraHeaders map[string]string) (*RawResponse, error) {
	if params == nil || params["startTime"] == nil || params["endTime"] == nil {
		return nil, fmt.Errorf("params.startTime and params.endTime required")
	}
	// TODO: extraHeaders (e.g. timezone-login) are not yet wired into HTTPClient; extend HTTP layer if header-level control is required.
	resp, err := c.http.PrivateRequest(ctx, "GET", PathAssetAnalysisExport, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetContractFeeDiscountConfig returns contract fee discount configuration.
// @endpoint GET /api/v1/private/account/config/contractFeeDiscountConfig
func (c *RestAPI) GetContractFeeDiscountConfig(ctx context.Context) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "GET", PathContractFeeDiscountConfig, nil)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetOrderDealFeeTotal returns total order deal fees (last 30 days).
// @endpoint GET /api/v1/private/account/asset_book/order_deal_fee/total
func (c *RestAPI) GetOrderDealFeeTotal(ctx context.Context) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "GET", PathOrderDealFeeTotal, nil)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetZeroFeeRate returns zero-fee rate pairs.
// @endpoint GET /api/v1/private/account/contract/zero_fee_rate
func (c *RestAPI) GetZeroFeeRate(ctx context.Context, params map[string]any) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "GET", PathZeroFeeRate, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ChangeRiskLevel changes risk level configuration (may be disabled by server).
// @endpoint POST /api/v1/private/account/change_risk_level
func (c *RestAPI) ChangeRiskLevel(ctx context.Context, params map[string]any) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "POST", PathChangeRiskLevel, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ----- private position -----

// GetHistoryPositions returns history positions. Params: symbol, type, start_time, end_time, page_num, page_size.
