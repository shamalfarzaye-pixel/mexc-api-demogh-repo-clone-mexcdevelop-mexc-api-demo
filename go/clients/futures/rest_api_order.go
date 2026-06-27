package futures

import (
	"context"
	"fmt"
	"strconv"
	"strings"
)

// RestAPI — Order endpoints.
// @endpoint POST /api/v1/private/order/create
func (c *RestAPI) CreateOrder(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if getStringParam(params, "symbol") == "" {
		return nil, fmt.Errorf("params.symbol required")
	}
	if _, ok := params["vol"]; !ok {
		return nil, fmt.Errorf("params.vol required")
	}
	if _, ok := params["side"]; !ok {
		return nil, fmt.Errorf("params.side required")
	}
	if _, ok := params["type"]; !ok {
		return nil, fmt.Errorf("params.type required")
	}
	if _, ok := params["openType"]; !ok {
		return nil, fmt.Errorf("params.openType required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathOrderCreate, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// SubmitOrderBatch submits multiple orders. Params must be a slice of order objects (raw array body) or map with "batchOrder" key (slice).
// Body sent to API is exactly the JSON array of order objects (same as Node/Postman).
// @endpoint POST /api/v1/private/order/submit_batch
func (c *RestAPI) SubmitOrderBatch(ctx context.Context, params interface{}) (*RawResponse, error) {
	var body interface{}
	switch v := params.(type) {
	case []interface{}:
		if len(v) == 0 {
			return nil, fmt.Errorf("batchOrder must not be empty")
		}
		body = v
	case map[string]any:
		bo, ok := v["batchOrder"]
		if !ok {
			return nil, fmt.Errorf("params.batchOrder required (array) or pass array directly")
		}
		sl, ok := toSlice(bo)
		if !ok || len(sl) == 0 {
			return nil, fmt.Errorf("batchOrder must not be empty")
		}
		body = sl
	default:
		return nil, fmt.Errorf("params must be []interface{} or map with batchOrder")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathOrderSubmitBatch, body)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// CancelOrder cancels one or more orders. Params: orderIds ([]int64) or orderId (single int64). Body sent is JSON array of order IDs.
// @endpoint POST /api/v1/private/order/cancel
func (c *RestAPI) CancelOrder(ctx context.Context, params map[string]any) (*RawResponse, error) {
	ids := orderIDsFromParams(params)
	if len(ids) == 0 {
		return nil, fmt.Errorf("orderIds or orderId required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathOrderCancel, ids)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// CancelAllOrders cancels all orders. Params may include symbol (omit to cancel all contracts).
// @endpoint POST /api/v1/private/order/cancel_all
func (c *RestAPI) CancelAllOrders(ctx context.Context, params map[string]any) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "POST", PathOrderCancelAll, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetOrderDetail returns order detail by order id. Params must include orderId.
// @endpoint GET /api/v1/private/order/get/{orderId}
func (c *RestAPI) GetOrderDetail(ctx context.Context, params map[string]any) (*RawResponse, error) {
	orderId := getOrderIDParam(params, "orderId")
	if orderId == 0 {
		orderId = getOrderIDParam(params, "order_id")
	}
	if orderId == 0 {
		return nil, fmt.Errorf("params.orderId or order_id required")
	}
	path := PathOrderGet + "/" + strconv.FormatInt(orderId, 10)
	resp, err := c.http.PrivateRequest(ctx, "GET", path, nil)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetOpenOrders returns open orders. Params may include page_num (default 1), page_size (default 20).
// @endpoint GET /api/v1/private/order/list/open_orders
func (c *RestAPI) GetOpenOrders(ctx context.Context, params map[string]any) (*RawResponse, error) {
	p := toInterfaceMap(params)
	if p == nil {
		p = make(map[string]interface{})
	}
	pn, ps := getIntParam(params, "page_num"), getIntParam(params, "page_size")
	if pn == 0 {
		pn = 1
		p["page_num"] = 1
	}
	if ps == 0 {
		ps = 20
		p["page_size"] = 20
	}
	if err := CheckPage(pn, ps, 100); err != nil {
		return nil, err
	}
	resp, err := c.http.PrivateRequest(ctx, "GET", PathOrderListOpenOrders, p)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetHistoryOrders returns history orders. Params: symbol?, states?, category?, startTime?, endTime?, page_num, page_size, orderId?.
// @endpoint GET /api/v1/private/order/list/history_orders
func (c *RestAPI) GetHistoryOrders(ctx context.Context, params map[string]any) (*RawResponse, error) {
	p := toInterfaceMap(params)
	if p != nil {
		if pn, ps := getIntParam(params, "page_num"), getIntParam(params, "page_size"); pn != 0 || ps != 0 {
			if err := CheckPage(pn, ps, 100); err != nil {
				return nil, err
			}
		}
	}
	resp, err := c.http.PrivateRequest(ctx, "GET", PathOrderListHistoryOrders, p)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetOrderDealList returns order deal list (v3). Params must include symbol; page_num, page_size optional.
// @endpoint GET /api/v1/private/order/list/order_deals/v3
func (c *RestAPI) GetOrderDealList(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if getStringParam(params, "symbol") == "" {
		return nil, fmt.Errorf("params.symbol required")
	}
	p := toInterfaceMap(params)
	if p != nil {
		if pn, ps := getIntParam(params, "page_num"), getIntParam(params, "page_size"); pn != 0 || ps != 0 {
			if err := CheckPage(pn, ps, 100); err != nil {
				return nil, err
			}
		}
	}
	resp, err := c.http.PrivateRequest(ctx, "GET", PathOrderListOrderDealsV3, p)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// BatchCancelWithExternal cancels multiple orders by external order identifiers (raw array body).
// @endpoint POST /api/v1/private/order/batch_cancel_with_external
func (c *RestAPI) BatchCancelWithExternal(ctx context.Context, params interface{}) (*RawResponse, error) {
	list, ok := toSlice(params)
	if !ok || len(list) == 0 {
		return nil, fmt.Errorf("params must be non-empty array of { symbol, externalOid }")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathOrderBatchCancelWithExternal, list)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// CancelWithExternal cancels order(s) by external order id. Body is a single-element array for compatibility with API.
// @endpoint POST /api/v1/private/order/cancel_with_external
func (c *RestAPI) CancelWithExternal(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if getStringParam(params, "symbol") == "" {
		return nil, fmt.Errorf("params.symbol required")
	}
	if getStringParam(params, "externalOid") == "" {
		return nil, fmt.Errorf("params.externalOid required")
	}
	body := []interface{}{toInterfaceMap(params)}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathOrderCancelWithExternal, body)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ChaseLimitOrder moves a limit order price to the next price level.
// @endpoint POST /api/v1/private/order/chase_limit_order
func (c *RestAPI) ChaseLimitOrder(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if getOrderIDParam(params, "orderId") == 0 {
		return nil, fmt.Errorf("params.orderId required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathOrderChaseLimitOrder, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ChangeLimitOrder changes price and/or volume of an existing limit order.
// @endpoint POST /api/v1/private/order/change_limit_order
func (c *RestAPI) ChangeLimitOrder(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if getOrderIDParam(params, "orderId") == 0 {
		return nil, fmt.Errorf("params.orderId required")
	}
	if _, ok := params["price"]; !ok {
		return nil, fmt.Errorf("params.price required")
	}
	if _, ok := params["vol"]; !ok {
		return nil, fmt.Errorf("params.vol required")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathOrderChangeLimitOrder, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetOpenOrderTotalCount returns total count of open orders.
// @endpoint POST /api/v1/private/order/open_order_total_count
func (c *RestAPI) GetOpenOrderTotalCount(ctx context.Context, params map[string]any) (*RawResponse, error) {
	// TODO: Confirm exact request params from official Futures docs (Node SDK mentions doc inconsistency).
	resp, err := c.http.PrivateRequest(ctx, "POST", PathOrderOpenOrderTotalCount, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetOrderByExternal returns order detail by external order id.
// @endpoint GET /api/v1/private/order/external/{symbol}/{external_oid}
func (c *RestAPI) GetOrderByExternal(ctx context.Context, params map[string]any) (*RawResponse, error) {
	symbol := getStringParam(params, "symbol")
	if symbol == "" {
		return nil, fmt.Errorf("params.symbol required")
	}
	externalOid := getStringParam(params, "external_oid")
	if externalOid == "" {
		return nil, fmt.Errorf("params.external_oid required")
	}
	path := PathOrderExternal + "/" + symbol + "/" + externalOid
	resp, err := c.http.PrivateRequest(ctx, "GET", path, nil)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// BatchQueryOrders queries orders by IDs (comma-separated list or array).
// @endpoint GET /api/v1/private/order/batch_query
func (c *RestAPI) BatchQueryOrders(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if params == nil {
		return nil, fmt.Errorf("params required")
	}
	_, hasOrderIds := params["order_ids"]
	_, hasOrderIdsCamel := params["orderIds"]
	if !hasOrderIds && !hasOrderIdsCamel {
		return nil, fmt.Errorf("params.order_ids or orderIds required")
	}
	p := toInterfaceMap(params)
	// Normalize array of IDs to comma-separated string on order_ids.
	if v, ok := p["order_ids"]; ok {
		if sl, ok2 := toSlice(v); ok2 {
			parts := make([]string, 0, len(sl))
			for _, x := range sl {
				id := toInt64(x)
				if id != 0 {
					parts = append(parts, strconv.FormatInt(id, 10))
				}
			}
			p["order_ids"] = strings.Join(parts, ",")
		}
	} else if v, ok := p["orderIds"]; ok {
		if sl, ok2 := toSlice(v); ok2 {
			parts := make([]string, 0, len(sl))
			for _, x := range sl {
				id := toInt64(x)
				if id != 0 {
					parts = append(parts, strconv.FormatInt(id, 10))
				}
			}
			p["order_ids"] = strings.Join(parts, ",")
			delete(p, "orderIds")
		}
	}
	resp, err := c.http.PrivateRequest(ctx, "GET", PathOrderBatchQuery, p)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// BatchQueryWithExternal queries orders by external order identifiers using raw array body.
// @endpoint POST /api/v1/private/order/batch_query_with_external
func (c *RestAPI) BatchQueryWithExternal(ctx context.Context, params interface{}) (*RawResponse, error) {
	list, ok := toSlice(params)
	if !ok || len(list) == 0 {
		return nil, fmt.Errorf("params must be non-empty array of { symbol, externalOid }")
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathOrderBatchQueryWithExternal, list)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetCloseOrders returns closed orders list.
// @endpoint GET /api/v1/private/order/list/close_orders
func (c *RestAPI) GetCloseOrders(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if getStringParam(params, "symbol") == "" {
		return nil, fmt.Errorf("params.symbol required")
	}
	pn := getIntParam(params, "page_num")
	ps := getIntParam(params, "page_size")
	if pn == 0 {
		pn = 1
	}
	if ps == 0 {
		ps = 20
	}
	if err := CheckPage(pn, ps, 1000); err != nil {
		return nil, err
	}
	p := toInterfaceMap(params)
	if p == nil {
		p = make(map[string]interface{})
	}
	p["page_num"] = pn
	p["page_size"] = ps
	resp, err := c.http.PrivateRequest(ctx, "GET", PathOrderListCloseOrders, p)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetOrderDealDetails returns deal details for a single order.
// @endpoint GET /api/v1/private/order/deal_details/{orderId}
func (c *RestAPI) GetOrderDealDetails(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if getStringParam(params, "symbol") == "" {
		return nil, fmt.Errorf("params.symbol required")
	}
	orderId := getOrderIDParam(params, "order_id")
	if orderId == 0 {
		orderId = getOrderIDParam(params, "orderId")
	}
	if orderId == 0 {
		return nil, fmt.Errorf("params.order_id or orderId required")
	}
	path := PathOrderDealDetails + "/" + strconv.FormatInt(orderId, 10)
	body := map[string]interface{}{"symbol": getStringParam(params, "symbol")}
	resp, err := c.http.PrivateRequest(ctx, "GET", path, body)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetOrderFeeDetails returns fee details for orders.
// @endpoint GET /api/v1/private/order/fee_details
func (c *RestAPI) GetOrderFeeDetails(ctx context.Context, params map[string]any) (*RawResponse, error) {
	if getStringParam(params, "symbol") == "" {
		return nil, fmt.Errorf("params.symbol required")
	}
	resp, err := c.http.PrivateRequest(ctx, "GET", PathOrderFeeDetails, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ----- private plan order -----

// GetPlanOrders returns plan orders list with pagination.
