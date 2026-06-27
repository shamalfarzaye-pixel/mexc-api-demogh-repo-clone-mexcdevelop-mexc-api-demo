package futures

import (
	"context"
	"fmt"
)

// RestAPI — Position endpoints.
// @endpoint GET /api/v1/private/position/open_positions
func (c *RestAPI) GetPositions(ctx context.Context, params map[string]any) (*RawResponse, error) {
	var p map[string]interface{}
	if params != nil {
		p = make(map[string]interface{}, len(params))
		for k, v := range params {
			p[k] = v
		}
	}
	resp, err := c.http.PrivateRequest(ctx, "GET", PathPositionOpenPositions, p)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetContractDetail returns contract detail for a single symbol or all contracts when symbol is empty.
// @endpoint GET /api/v1/private/position/list/history_positions
func (c *RestAPI) GetHistoryPositions(ctx context.Context, params map[string]any) (*RawResponse, error) {
	p := toInterfaceMap(params)
	if p != nil {
		if pn, ps := getIntParam(params, "page_num"), getIntParam(params, "page_size"); pn != 0 || ps != 0 {
			if err := CheckPage(pn, ps, 100); err != nil {
				return nil, err
			}
		}
	}
	resp, err := c.http.PrivateRequest(ctx, "GET", PathPositionHistoryPositions, p)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetLeverage returns position leverage. Params must include symbol.
// @endpoint GET /api/v1/private/position/leverage
func (c *RestAPI) GetLeverage(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if getStringParam(params, "symbol") == "" {
		return nil, fmt.Errorf("params.symbol required")
	}
	resp, err := c.http.PrivateRequest(ctx, "GET", PathPositionLeverage, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetFundingRecords returns funding records. Params should include symbol, page_num, page_size, position_type, start_time, end_time (API requirements).
// @endpoint GET /api/v1/private/position/funding_records
func (c *RestAPI) GetFundingRecords(ctx context.Context, params map[string]any) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "GET", PathPositionFundingRecords, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ----- private order -----

// ChangeMargin changes margin for a position.
// @endpoint POST /api/v1/private/position/change_margin
func (c *RestAPI) ChangeMargin(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if params == nil || params["positionId"] == nil || params["amount"] == nil || getStringParam(params, "type") == "" {
		return nil, fmt.Errorf("params.positionId, params.amount, params.type required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathPositionChangeMargin, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ChangeAutoAddIm enables or disables auto add margin for a position.
// @endpoint POST /api/v1/private/position/change_auto_add_im
func (c *RestAPI) ChangeAutoAddIm(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if params == nil || params["positionId"] == nil || params["isEnabled"] == nil {
		return nil, fmt.Errorf("params.positionId and params.isEnabled required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathPositionChangeAutoAddIm, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ChangeLeverage changes leverage for positions.
// @endpoint POST /api/v1/private/position/change_leverage
func (c *RestAPI) ChangeLeverage(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if params == nil || params["leverage"] == nil {
		return nil, fmt.Errorf("params.leverage required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathPositionChangeLeverage, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetPositionMode returns current position mode.
// @endpoint GET /api/v1/private/position/position_mode
func (c *RestAPI) GetPositionMode(ctx context.Context) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "GET", PathPositionMode, nil)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ChangePositionMode changes position mode (e.g. hedge or one-way).
// @endpoint POST /api/v1/private/position/change_position_mode
func (c *RestAPI) ChangePositionMode(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if params == nil || params["positionMode"] == nil {
		return nil, fmt.Errorf("params.positionMode required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathPositionChangePositionMode, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ReversePosition reverses a position.
// @endpoint POST /api/v1/private/position/reverse
func (c *RestAPI) ReversePosition(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if params == nil || getStringParam(params, "symbol") == "" || params["positionId"] == nil || params["vol"] == nil {
		return nil, fmt.Errorf("params.symbol, params.positionId, params.vol required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathPositionReverse, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// CloseAllPositions closes all positions.
// @endpoint POST /api/v1/private/position/close_all
func (c *RestAPI) CloseAllPositions(ctx context.Context, params map[string]any) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "POST", PathPositionCloseAll, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ----- private order -----

// CreateOrder places a single order. Params: symbol, vol, side, type, openType, price? (for limit), leverage? (for open).
