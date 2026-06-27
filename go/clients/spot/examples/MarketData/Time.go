package main

import (
	"fmt"

	"{GO_MOD}/clients/spot"
	spotv3 "{GO_MOD}/common/spotv3"
)

func main() {
	client := spot.NewClient(spotv3.Config{})
	api := client.RestApi()

	result := api.Time("")
	fmt.Println(result)
}
