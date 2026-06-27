package main

import (
	"context"
	"fmt"
	"time"

	"github.com/mexcdevelop/mexc-api-demo/go/clients/futures"
)

func main() {
	client := futures.NewClient(futures.DefaultConfig()).RestApi()

	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()

	resp, err := client.GetDepth(ctx, "BTC_USDT", 20)
	if err != nil {
		fmt.Println("error:", err)
		return
	}
	fmt.Println("response:", resp.Text)
}
