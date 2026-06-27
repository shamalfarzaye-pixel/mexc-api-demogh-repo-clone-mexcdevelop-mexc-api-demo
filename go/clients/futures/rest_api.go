package futures

// RestAPI is the MEXC Futures REST API client.
type RestAPI struct {
	http *HTTPClient
}

// NewRestAPI creates a REST API client.
func NewRestAPI(cfg Config) *RestAPI {
	return &RestAPI{http: NewHTTPClient(cfg)}
}

// HasAuth reports whether API credentials are configured.
func (c *RestAPI) HasAuth() bool {
	return c.http.hasAuth()
}
