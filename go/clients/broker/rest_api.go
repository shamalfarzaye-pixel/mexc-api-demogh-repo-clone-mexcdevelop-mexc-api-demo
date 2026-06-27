package broker

import spotv3 "github.com/mexcdevelop/mexc-api-demo/go/common/spotv3"

type RestAPI struct {
	client *spotv3.SpotClient
}

func newRestAPI(c *spotv3.SpotClient) *RestAPI {
	return &RestAPI{client: c}
}
