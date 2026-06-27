package main

import (
	"fmt"

	"{GO_MOD}/clients/spot"
	spotv3 "{GO_MOD}/common/spotv3"
)

func main() {
	client := spot.NewClient(spotv3.Config{})
	api := client.RestApi()

	result := api.Kline(`{"symbol":"BTCUSDT","interval":"1m","limit":"10"}`)
	fmt.Println(result)
}
