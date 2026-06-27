package futures

import (
	"context"
	"fmt"
)

// RestAPI — Plan Order endpoints.
// @endpoint GET /api/v1/private/planorder/list/orders
func (c *RestAPI) GetPlanOrders(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if params == nil {
		return nil, fmt.Errorf("params required")
	}
	if _, ok := params["start_time"]; !ok {
		return nil, fmt.Errorf("params.start_time required")
	}
	if _, ok := params["end_time"]; !ok {
		return nil, fmt.Errorf("params.end_time required")
	}
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
	resp, err := c.http.PrivateRequest(ctx, "GET", PathPlanListOrders, p)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// PlacePlanOrder places a new plan order.
// @endpoint POST /api/v1/private/planorder/place/v2
func (c *RestAPI) PlacePlanOrder(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if params == nil {
		return nil, fmt.Errorf("params required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathPlanPlaceV2, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ChangePlanOrderPrice changes the price of an existing plan order.
// @endpoint POST /api/v1/private/planorder/change_price
func (c *RestAPI) ChangePlanOrderPrice(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if params == nil {
		return nil, fmt.Errorf("params required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathPlanChangePrice, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// CancelPlanOrder cancels plan orders. Accepts either an array body or map with "orders" array.
// @endpoint POST /api/v1/private/planorder/cancel
func (c *RestAPI) CancelPlanOrder(ctx context.Context, params interface{}) (*RawResponse, error) {
	list, ok := toSlice(params)
	if !ok || len(list) == 0 {
		// Try wrapper with orders key.
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
		return nil, fmt.Errorf("params.orders or array of { symbol, orderId } required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathPlanCancel, list)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// CancelAllPlanOrders cancels all plan orders for the account (optionally filtered by symbol).
// @endpoint POST /api/v1/private/planorder/cancel_all
func (c *RestAPI) CancelAllPlanOrders(ctx context.Context, params map[string]any) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "POST", PathPlanCancelAll, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ChangePlanStopOrder changes the stop (TP/SL) configuration for a plan order.
// @endpoint POST /api/v1/private/planorder/change_stop_order
func (c *RestAPI) ChangePlanStopOrder(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if params == nil {
		return nil, fmt.Errorf("params required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathPlanChangeStopOrder, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ----- private stop order -----

// PlaceStopOrder places a stop order (TP/SL).
