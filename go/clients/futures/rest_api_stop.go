package futures

import (
	"context"
	"fmt"
)

// RestAPI — Stop Order endpoints.
// @endpoint POST /api/v1/private/stoporder/place
func (c *RestAPI) PlaceStopOrder(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if params == nil {
		return nil, fmt.Errorf("params required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathStopPlace, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// CancelStopOrder cancels stop orders. Accepts either an array body or map with "orders" array.
// @endpoint POST /api/v1/private/stoporder/cancel
func (c *RestAPI) CancelStopOrder(ctx context.Context, params interface{}) (*RawResponse, error) {
	list, ok := toSlice(params)
	if !ok || len(list) == 0 {
		if m, ok2 := params.(map[string]any); ok2 {
			if orders, exists := m["orders"]; exists {
				if sl, ok3 := toSlice(orders); ok3 {
					list = sl
				}
			}
		} else if m, ok2 := params.(map[string]interface{}); ok2 {
			if orders, exists := m["orders"]; exists {
				if sl, ok3 := toSlice(orders); ok3 {
					list = sl
				}
			}
		}
	}
	if len(list) == 0 {
		return nil, fmt.Errorf("params.orders or array of { stopPlanOrderId } required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathStopCancel, list)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// CancelAllStopOrders cancels all stop orders.
// @endpoint POST /api/v1/private/stoporder/cancel_all
func (c *RestAPI) CancelAllStopOrders(ctx context.Context, params map[string]any) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "POST", PathStopCancelAll, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ChangeStopOrderPrice changes stop order price.
// @endpoint POST /api/v1/private/stoporder/change_price
func (c *RestAPI) ChangeStopOrderPrice(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if params == nil {
		return nil, fmt.Errorf("params required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathStopChangePrice, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ChangeStopPlanPrice changes stop plan price.
// @endpoint POST /api/v1/private/stoporder/change_plan_price
func (c *RestAPI) ChangeStopPlanPrice(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if params == nil {
		return nil, fmt.Errorf("params required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathStopChangePlanPrice, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetStopOrders returns stop orders list with pagination.
// @endpoint GET /api/v1/private/stoporder/list/orders
func (c *RestAPI) GetStopOrders(ctx context.Context, params map[string]any) (*RawResponse, error) {
	pn := getIntParam(params, "page_num")
	ps := getIntParam(params, "page_size")
	if pn == 0 {
		pn = 1
	}
	if ps == 0 {
		ps = 20
	}
	if err := CheckPage(pn, ps, 100); err != nil {
		return nil, err
	}
	p := toInterfaceMap(params)
	if p == nil {
		p = make(map[string]interface{})
	}
	p["page_num"] = pn
	p["page_size"] = ps
	resp, err := c.http.PrivateRequest(ctx, "GET", PathStopListOrders, p)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetStopOpenOrders returns current stop orders.
// @endpoint GET /api/v1/private/stoporder/open_orders
func (c *RestAPI) GetStopOpenOrders(ctx context.Context, params map[string]any) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "GET", PathStopOpenOrders, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ----- private track order -----

// PlaceTrackOrder places a track order.
