package spot

import spotv3 "github.com/mexcdevelop/mexc-api-demo/go/common/spotv3"

// RestAPI provides Spot v3 REST methods.
type RestAPI struct {
	client *spotv3.SpotClient
}

func newRestAPI(c *spotv3.SpotClient) *RestAPI {
	return &RestAPI{client: c}
}
