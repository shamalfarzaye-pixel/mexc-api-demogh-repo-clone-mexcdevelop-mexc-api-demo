package broker

import spotv3 "github.com/mexcdevelop/mexc-api-demo/go/common/spotv3"

// Client is the root MEXC Broker connector (Spot v3 /broker paths).
type Client struct {
	cfg  spotv3.Config
	http *spotv3.SpotClient
}

// NewClient creates a Broker connector.
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

// RestApi returns the Broker REST API facade.
func (c *Client) RestApi() *RestAPI {
	return newRestAPI(c.http)
}

// Config returns the client configuration.
func (c *Client) Config() spotv3.Config {
	return c.cfg
}
