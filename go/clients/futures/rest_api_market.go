package futures

import (
	"context"
	"fmt"
	"strconv"
)

// RestAPI — Market Data endpoints.
// @endpoint GET /api/v1/contract/ping
func (c *RestAPI) Ping(ctx context.Context) (*RawResponse, error) {
	resp, err := c.http.PublicRequest(ctx, "GET", PathPing, nil)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetTicker returns ticker for the given symbol or all contracts when symbol is empty.
// @endpoint GET /api/v1/contract/ticker
func (c *RestAPI) GetTicker(ctx context.Context, symbol string) (*RawResponse, error) {
	params := map[string]interface{}{}
	if symbol != "" {
		params["symbol"] = symbol
	}
	resp, err := c.http.PublicRequest(ctx, "GET", PathTicker, params)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetDepth returns order book depth for the given symbol and limit (optional; <=0 uses API default 20).
// @endpoint GET /api/v1/contract/depth
func (c *RestAPI) GetDepth(ctx context.Context, symbol string, limit int) (*RawResponse, error) {
	if symbol == "" {
		return nil, ErrSymbolRequired
	}
	if limit <= 0 {
		limit = 20
	}
	if err := CheckLimit(limit, 100); err != nil {
		return nil, err
	}
	path := PathDepth + "/" + symbol
	params := map[string]interface{}{"limit": limit}
	resp, err := c.http.PublicRequest(ctx, "GET", path, params)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetAssets returns account assets (private; requires API key and secret).
// @endpoint GET /api/v1/contract/detail
func (c *RestAPI) GetContractDetail(ctx context.Context, symbol string) (*RawResponse, error) {
	params := map[string]interface{}{}
	if symbol != "" {
		params["symbol"] = symbol
	}
	resp, err := c.http.PublicRequest(ctx, "GET", PathContractDetail, params)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetContractDetailCountry returns contract info with country-specific configuration.
// @endpoint GET /api/v1/contract/detail/country
func (c *RestAPI) GetContractDetailCountry(ctx context.Context, symbol string) (*RawResponse, error) {
	params := map[string]interface{}{}
	if symbol != "" {
		params["symbol"] = symbol
	}
	resp, err := c.http.PublicRequest(ctx, "GET", PathContractDetailCountry, params)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetSupportCurrencies returns transferable currencies list.
// @endpoint GET /api/v1/contract/support_currencies
func (c *RestAPI) GetSupportCurrencies(ctx context.Context) (*RawResponse, error) {
	resp, err := c.http.PublicRequest(ctx, "GET", PathSupportCurrencies, nil)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetDepthCommits returns recent depth snapshots for the given symbol and limit.
// @endpoint GET /api/v1/contract/depth_commits/{symbol}/{limit}
func (c *RestAPI) GetDepthCommits(ctx context.Context, symbol string, limit int) (*RawResponse, error) {
	if symbol == "" {
		return nil, ErrSymbolRequired
	}
	if limit < 1 {
		return nil, fmt.Errorf("limit required and must be >= 1")
	}
	path := PathDepthCommits + "/" + symbol + "/" + strconv.Itoa(limit)
	resp, err := c.http.PublicRequest(ctx, "GET", path, nil)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetIndexPrice returns index price for the given symbol.
// @endpoint GET /api/v1/contract/index_price/{symbol}
func (c *RestAPI) GetIndexPrice(ctx context.Context, symbol string) (*RawResponse, error) {
	if symbol == "" {
		return nil, ErrSymbolRequired
	}
	path := PathIndexPrice + "/" + symbol
	resp, err := c.http.PublicRequest(ctx, "GET", path, nil)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetFairPrice returns fair price (mark price) for the given symbol.
// @endpoint GET /api/v1/contract/fair_price/{symbol}
func (c *RestAPI) GetFairPrice(ctx context.Context, symbol string) (*RawResponse, error) {
	if symbol == "" {
		return nil, ErrSymbolRequired
	}
	path := PathFairPrice + "/" + symbol
	resp, err := c.http.PublicRequest(ctx, "GET", path, nil)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetFundingRate returns current funding rate for the given symbol.
// @endpoint GET /api/v1/contract/funding_rate/{symbol}
func (c *RestAPI) GetFundingRate(ctx context.Context, symbol string) (*RawResponse, error) {
	if symbol == "" {
		return nil, ErrSymbolRequired
	}
	path := PathFundingRate + "/" + symbol
	resp, err := c.http.PublicRequest(ctx, "GET", path, nil)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// FundingRateHistoryParams defines parameters for funding rate history.
// TODO: Confirm allowed page_num/page_size ranges from official docs.
type FundingRateHistoryParams struct {
	Symbol   string
	PageNum  int
	PageSize int
}

// GetFundingRateHistory returns historical funding rates with pagination.
// @endpoint GET /api/v1/contract/funding_rate/history
func (c *RestAPI) GetFundingRateHistory(ctx context.Context, p FundingRateHistoryParams) (*RawResponse, error) {
	if p.Symbol == "" {
		return nil, ErrSymbolRequired
	}
	if err := CheckPage(p.PageNum, p.PageSize, 100); err != nil {
		return nil, err
	}
	params := map[string]interface{}{
		"symbol": p.Symbol,
	}
	if p.PageNum > 0 {
		params["page_num"] = p.PageNum
	}
	if p.PageSize > 0 {
		params["page_size"] = p.PageSize
	}
	resp, err := c.http.PublicRequest(ctx, "GET", PathFundingRateHistory, params)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// KlineParams defines shared parameters for kline endpoints.
// Time fields follow the Futures docs (commonly seconds since epoch).
// TODO: Confirm exact time unit (seconds vs milliseconds) from official docs.
type KlineParams struct {
	Interval string
	Start    int64
	End      int64
}

// GetKline returns candlestick data for a symbol.
// @endpoint GET /api/v1/contract/kline/{symbol}
func (c *RestAPI) GetKline(ctx context.Context, symbol string, p KlineParams) (*RawResponse, error) {
	if symbol == "" {
		return nil, ErrSymbolRequired
	}
	path := PathKline + "/" + symbol
	params := map[string]interface{}{}
	if p.Interval != "" {
		params["interval"] = p.Interval
	}
	if p.Start > 0 {
		params["start"] = p.Start
	}
	if p.End > 0 {
		params["end"] = p.End
	}
	resp, err := c.http.PublicRequest(ctx, "GET", path, params)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetKlineIndexPrice returns index price kline for a symbol.
// @endpoint GET /api/v1/contract/kline/index_price/{symbol}
func (c *RestAPI) GetKlineIndexPrice(ctx context.Context, symbol string, p KlineParams) (*RawResponse, error) {
	if symbol == "" {
		return nil, ErrSymbolRequired
	}
	path := PathKlineIndexPrice + "/" + symbol
	params := map[string]interface{}{}
	if p.Interval != "" {
		params["interval"] = p.Interval
	}
	if p.Start > 0 {
		params["start"] = p.Start
	}
	if p.End > 0 {
		params["end"] = p.End
	}
	resp, err := c.http.PublicRequest(ctx, "GET", path, params)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetKlineFairPrice returns fair price kline for a symbol.
// @endpoint GET /api/v1/contract/kline/fair_price/{symbol}
func (c *RestAPI) GetKlineFairPrice(ctx context.Context, symbol string, p KlineParams) (*RawResponse, error) {
	if symbol == "" {
		return nil, ErrSymbolRequired
	}
	path := PathKlineFairPrice + "/" + symbol
	params := map[string]interface{}{}
	if p.Interval != "" {
		params["interval"] = p.Interval
	}
	if p.Start > 0 {
		params["start"] = p.Start
	}
	if p.End > 0 {
		params["end"] = p.End
	}
	resp, err := c.http.PublicRequest(ctx, "GET", path, params)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetDeals returns recent trades for a symbol.
// @endpoint GET /api/v1/contract/deals/{symbol}
func (c *RestAPI) GetDeals(ctx context.Context, symbol string, limit int) (*RawResponse, error) {
	if symbol == "" {
		return nil, ErrSymbolRequired
	}
	if limit <= 0 {
		limit = 100
	}
	if err := CheckLimit(limit, 100); err != nil {
		return nil, err
	}
	path := PathDeals + "/" + symbol
	params := map[string]interface{}{}
	if limit > 0 {
		params["limit"] = limit
	}
	resp, err := c.http.PublicRequest(ctx, "GET", path, params)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetRiskReverse returns risk fund balance, for a single symbol when provided or all contracts when symbol is empty.
// @endpoint GET /api/v1/contract/risk_reverse or /api/v1/contract/risk_reverse/{symbol}
func (c *RestAPI) GetRiskReverse(ctx context.Context, symbol string) (*RawResponse, error) {
	if symbol == "" {
		resp, err := c.http.PublicRequest(ctx, "GET", PathRiskReverse, nil)
		if err != nil {
			return nil, err
		}
		return resp, nil
	}
	path := PathRiskReverse + "/" + symbol
	resp, err := c.http.PublicRequest(ctx, "GET", path, nil)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// RiskReverseHistoryParams defines parameters for risk reverse history.
// TODO: Confirm allowed page_num/page_size ranges from official docs.
type RiskReverseHistoryParams struct {
	Symbol   string
	PageNum  int
	PageSize int
}

// GetRiskReverseHistory returns risk fund balance history.
// @endpoint GET /api/v1/contract/risk_reverse/history
func (c *RestAPI) GetRiskReverseHistory(ctx context.Context, p RiskReverseHistoryParams) (*RawResponse, error) {
	if p.Symbol == "" {
		return nil, ErrSymbolRequired
	}
	if err := CheckPage(p.PageNum, p.PageSize, 100); err != nil {
		return nil, err
	}
	params := map[string]interface{}{
		"symbol": p.Symbol,
	}
	if p.PageNum > 0 {
		params["page_num"] = p.PageNum
	}
	if p.PageSize > 0 {
		params["page_size"] = p.PageSize
	}
	resp, err := c.http.PublicRequest(ctx, "GET", PathRiskReverseHistory, params)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ----- private account -----

// GetAsset returns single currency asset. Params must include "currency".
