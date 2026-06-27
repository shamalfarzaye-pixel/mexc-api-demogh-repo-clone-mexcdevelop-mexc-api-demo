package futures

import (
	"context"
	"fmt"
)

// RestAPI — Track Order endpoints.
// @endpoint POST /api/v1/private/trackorder/place
func (c *RestAPI) PlaceTrackOrder(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if params == nil {
		return nil, fmt.Errorf("params required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathTrackPlace, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// CancelTrackOrder cancels a track order.
// @endpoint POST /api/v1/private/trackorder/cancel
func (c *RestAPI) CancelTrackOrder(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if params == nil {
		return nil, fmt.Errorf("params required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathTrackCancel, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ChangeTrackOrder changes a track order.
// @endpoint POST /api/v1/private/trackorder/change_order
func (c *RestAPI) ChangeTrackOrder(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if params == nil {
		return nil, fmt.Errorf("params required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathTrackChangeOrder, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetTrackOrders returns track order list.
// @endpoint GET /api/v1/private/trackorder/list/orders
func (c *RestAPI) GetTrackOrders(ctx context.Context, params map[string]any) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "GET", PathTrackListOrders, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ----- private STP (self-trade prevention, market maker only) -----

// GetStpList queries STP groups and group members.
