package main

import (
	"context"
	"fmt"
	"time"

	"github.com/mexcdevelop/mexc-api-demo/go/clients/futures"
)

func main() {
	client := futures.NewClient(futures.DefaultConfig())
	ws := client.WsStream()

	ws.OnMessage = func(raw string, msg map[string]any) {
		fmt.Println(msg)
	}
	ws.OnError = func(err error) { fmt.Println("error:", err) }

	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()

	if err := ws.Connect(ctx); err != nil {
		fmt.Println("connect:", err)
		return
	}
	_ = ws.SubTicker(map[string]any{"symbol": "BTC_USDT"})
	<-ctx.Done()
	ws.Disconnect()
}
