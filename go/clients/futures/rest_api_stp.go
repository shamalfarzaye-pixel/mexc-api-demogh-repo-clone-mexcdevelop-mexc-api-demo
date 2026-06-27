package futures

import (
	"context"
	"fmt"
)

// RestAPI — STP endpoints.
// @endpoint GET /api/v1/private/market_maker/self_trade/blacklist
func (c *RestAPI) GetStpList(ctx context.Context, params map[string]any) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "GET", PathStpBlacklist, toInterfaceMap(params))
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// GetStpSearch returns the current user's STP group (market maker accounts only).
// @endpoint GET /api/v1/private/market_maker/self_trade/blacklist/search
func (c *RestAPI) GetStpSearch(ctx context.Context) (*RawResponse, error) {
	resp, err := c.http.PrivateRequest(ctx, "GET", PathStpBlacklistSearch, nil)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// CreateStp creates an STP group configuration.
// @endpoint POST /api/v1/private/market_maker/self_trade/blacklist/create
func (c *RestAPI) CreateStp(ctx context.Context, params map[string]any) (*RawResponse, error) {
	name := getStringParam(params, "configName")
	if name == "" {
		return nil, fmt.Errorf("params.configName required")
	}
	bl, ok := params["blacklist"]
	if !ok {
		return nil, fmt.Errorf("params.blacklist required and must be array")
	}
	list, ok := toSlice(bl)
	if !ok || len(list) == 0 {
		return nil, fmt.Errorf("params.blacklist required and must be array")
	}
	body := map[string]interface{}{
		"configName": name,
		"blacklist":  list,
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathStpBlacklistCreate, body)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// UpdateStp updates an existing STP group configuration.
// @endpoint POST /api/v1/private/market_maker/self_trade/blacklist/update
func (c *RestAPI) UpdateStp(ctx context.Context, params map[string]any) (*RawResponse, error) {
	name := getStringParam(params, "configName")
	if name == "" {
		return nil, fmt.Errorf("params.configName required")
	}
	bl, ok := params["blacklist"]
	if !ok {
		return nil, fmt.Errorf("params.blacklist required and must be array")
	}
	list, ok := toSlice(bl)
	if !ok || len(list) == 0 {
		return nil, fmt.Errorf("params.blacklist required and must be array")
	}
	body := map[string]interface{}{
		"configName": name,
		"blacklist":  list,
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathStpBlacklistUpdate, body)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// DeleteStp deletes an STP group.
// @endpoint POST /api/v1/private/market_maker/self_trade/blacklist/delete
func (c *RestAPI) DeleteStp(ctx context.Context, params map[string]any) (*RawResponse, error) {
	name := getStringParam(params, "configName")
	if name == "" {
		return nil, fmt.Errorf("params.configName required")
	}
	body := map[string]interface{}{
		"configName": name,
	}
	resp, err := c.http.PrivateRequest(ctx, "POST", PathStpBlacklistDelete, body)
	if err != nil {
		return nil, err
	}
	return resp, nil
}

// ----- helpers (private) -----

func toInterfaceMap(m map[string]any) map[string]interface{} {
	if m == nil {
		return nil
	}
	out := make(map[string]interface{}, len(m))
	for k, v := range m {
		out[k] = v
	}
	return out
}

func getStringParam(m map[string]any, key string) string {
	if m == nil {
		return ""
	}
	v, ok := m[key]
	if !ok {
		return ""
	}
	s, _ := v.(string)
	return s
}

func getIntParam(m map[string]any, key string) int {
	if m == nil {
		return 0
	}
	v, ok := m[key]
	if !ok {
		return 0
	}
	switch x := v.(type) {
	case int:
		return x
	case int64:
		return int(x)
	case float64:
		return int(x)
	default:
		return 0
	}
}

func getOrderIDParam(m map[string]any, key string) int64 {
	if m == nil {
		return 0
	}
	v, ok := m[key]
	if !ok {
		return 0
	}
	switch x := v.(type) {
	case int64:
		return x
	case int:
		return int64(x)
	case float64:
		return int64(x)
	default:
		return 0
	}
}

// orderIDsFromParams builds a slice of order IDs for cancel body. Supports orderIds ([]int64 or []interface{}) or orderId (single).
func orderIDsFromParams(params map[string]any) []int64 {
	if params == nil {
		return nil
	}
	if ids, ok := params["orderIds"]; ok {
		sl, ok := toSlice(ids)
		if !ok {
			return nil
		}
		out := make([]int64, 0, len(sl))
		for _, v := range sl {
			if id := toInt64(v); id != 0 {
				out = append(out, id)
			}
		}
		return out
	}
	if id := getOrderIDParam(params, "orderId"); id != 0 {
		return []int64{id}
	}
	return nil
}

func toSlice(v interface{}) ([]interface{}, bool) {
	if v == nil {
		return nil, false
	}
	// []interface{}
	if s, ok := v.([]interface{}); ok {
		return s, true
	}
	// []int64 or similar - convert to []interface{} for JSON
	if s, ok := v.([]int64); ok {
		out := make([]interface{}, len(s))
		for i := range s {
			out[i] = s[i]
		}
		return out, true
	}
	// []map[string]any
	if s, ok := v.([]map[string]any); ok {
		out := make([]interface{}, len(s))
		for i := range s {
			out[i] = s[i]
		}
		return out, true
	}
	// []map[string]interface{}
	if s, ok := v.([]map[string]interface{}); ok {
		out := make([]interface{}, len(s))
		for i := range s {
			out[i] = s[i]
		}
		return out, true
	}
	return nil, false
}

func toInt64(v interface{}) int64 {
	if v == nil {
		return 0
	}
	switch x := v.(type) {
	case int64:
		return x
	case int:
		return int64(x)
	case float64:
		return int64(x)
	default:
		return 0
	}
}
