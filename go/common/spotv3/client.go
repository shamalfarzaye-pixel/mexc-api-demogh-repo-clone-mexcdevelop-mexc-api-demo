package spotv3

import (
	"github.com/mexcdevelop/mexc-api-demo/go/common/config"
	"fmt"
)

// Config holds credentials and base URL for Spot v3 REST API.
type Config struct {
	APIKey    string
	APISecret string
	BaseURL   string
}

// SpotClient is the unified REST client for Spot / Broker / P2P (all use Spot v3 signing).
type SpotClient struct {
	cfg Config
}

// New creates a SpotClient with the given config.
func New(cfg Config) *SpotClient {
	if cfg.BaseURL == "" {
		cfg.BaseURL = config.BASE_URL
	}
	return &SpotClient{cfg: cfg}
}

// Default returns a client using global config from common/config.
func Default() *SpotClient {
	return New(Config{
		APIKey:    config.API_KEY,
		APISecret: config.SEC_KEY,
		BaseURL:   config.BASE_URL,
	})
}

func (c *SpotClient) fullURL(path string) string {
	return c.cfg.BaseURL + path
}

// Public performs an unsigned GET request.
func (c *SpotClient) Public(path, jsonParams string) interface{} {
	url := c.fullURL(path)
	fmt.Println("requestUrl:", url)
	return PublicGetWithAuth(url, jsonParams, c.cfg.APIKey)
}

// PrivateGet performs a signed GET request.
func (c *SpotClient) PrivateGet(path, jsonParams string) interface{} {
	url := c.fullURL(path)
	fmt.Println("requestUrl:", url)
	return PrivateRequest("GET", url, jsonParams, c.cfg.APIKey, c.cfg.APISecret)
}

// PrivatePost performs a signed POST request.
func (c *SpotClient) PrivatePost(path, jsonParams string) interface{} {
	url := c.fullURL(path)
	fmt.Println("requestUrl:", url)
	return PrivateRequest("POST", url, jsonParams, c.cfg.APIKey, c.cfg.APISecret)
}

// PrivateDelete performs a signed DELETE request.
func (c *SpotClient) PrivateDelete(path, jsonParams string) interface{} {
	url := c.fullURL(path)
	fmt.Println("requestUrl:", url)
	return PrivateRequest("DELETE", url, jsonParams, c.cfg.APIKey, c.cfg.APISecret)
}

// PrivatePut performs a signed PUT request.
func (c *SpotClient) PrivatePut(path, jsonParams string) interface{} {
	url := c.fullURL(path)
	fmt.Println("requestUrl:", url)
	return PrivateRequest("PUT", url, jsonParams, c.cfg.APIKey, c.cfg.APISecret)
}

// CallPublic is a package-level helper using the default client (demo compatibility).
func CallPublic(path, jsonParams string) interface{} {
	return Default().Public(path, jsonParams)
}

// CallPrivateGet is a package-level helper using the default client.
func CallPrivateGet(path, jsonParams string) interface{} {
	return Default().PrivateGet(path, jsonParams)
}

// CallPrivatePost is a package-level helper using the default client.
func CallPrivatePost(path, jsonParams string) interface{} {
	return Default().PrivatePost(path, jsonParams)
}

// CallPrivateDelete is a package-level helper using the default client.
func CallPrivateDelete(path, jsonParams string) interface{} {
	return Default().PrivateDelete(path, jsonParams)
}

// CallPrivatePut is a package-level helper using the default client.
func CallPrivatePut(path, jsonParams string) interface{} {
	return Default().PrivatePut(path, jsonParams)
}
