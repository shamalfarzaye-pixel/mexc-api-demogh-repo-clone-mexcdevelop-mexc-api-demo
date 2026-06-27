package p2p

import spotv3 "github.com/mexcdevelop/mexc-api-demo/go/common/spotv3"

// Client is the root MEXC P2P connector (REST + WebSocket chat).
type Client struct {
	cfg  spotv3.Config
	http *spotv3.SpotClient
}

// NewClient creates a P2P connector.
func NewClient(cfg spotv3.Config) *Client {
	return &Client{
		cfg:  cfg,
		http: spotv3.New(cfg),
	}
}

// DefaultClient returns a client using global config constants.
func DefaultClient() *Client {
	return NewClient(spotv3.Config{})
}

// RestApi returns the P2P REST API facade.
func (c *Client) RestApi() *RestAPI {
	return newRestAPI(c.http)
}

// WsChat creates a P2P chat WebSocket client (separate from REST).
func (c *Client) WsChat(cfg ChatWSConfig) *ChatWSClient {
	return NewChatWSClient(cfg)
}

// Config returns the client configuration.
func (c *Client) Config() spotv3.Config {
	return c.cfg
}
