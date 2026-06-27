package futures

// Client is the root MEXC Futures connector.
// Use RestApi() for REST and WsStream() for WebSocket — similar to modular connector SDKs.
type Client struct {
	cfg      Config
	restAPI  *RestAPI
	wsStream *WsStream
}

// NewClient creates the root futures connector with REST and WebSocket clients.
func NewClient(cfg Config) *Client {
	return &Client{
		cfg:      cfg,
		restAPI:  NewRestAPI(cfg),
		wsStream: NewWsStream(cfg),
	}
}

// Config returns the client configuration.
func (c *Client) Config() Config {
	return c.cfg
}

// RestApi returns the REST API client.
func (c *Client) RestApi() *RestAPI {
	return c.restAPI
}

// WsStream returns the WebSocket streams client.
func (c *Client) WsStream() *WsStream {
	return c.wsStream
}
