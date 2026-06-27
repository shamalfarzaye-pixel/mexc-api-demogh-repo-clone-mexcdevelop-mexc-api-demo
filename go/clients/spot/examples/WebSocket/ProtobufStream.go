package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/mexcdevelop/mexc-api-demo/go/clients/spot/websocket/pb"
	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/proto"
)

const (
	baseURL = "wss://wbs-api.mexc.com/ws"
)

var subscribeMessage = map[string]interface{}{
	"method": "SUBSCRIPTION",
	"params": []string{"spot@public.aggre.deals.v3.api.pb@10ms@BTCUSDT"},
}

func main() {
	dialer := websocket.DefaultDialer
	dialer.Proxy = http.ProxyFromEnvironment

	ws, _, err := dialer.Dial(baseURL, nil)
	if err != nil {
		fmt.Println("dial:", err)
		os.Exit(1)
	}
	defer ws.Close()

	sub, _ := json.Marshal(subscribeMessage)
	if err := ws.WriteMessage(websocket.TextMessage, sub); err != nil {
		fmt.Println("subscribe:", err)
		os.Exit(1)
	}

	done := make(chan struct{})
	go func() {
		defer close(done)
		for {
			_, msg, err := ws.ReadMessage()
			if err != nil {
				return
			}
			var wrapper pb.PushDataV3ApiWrapper
			if err := proto.Unmarshal(msg, &wrapper); err != nil {
				fmt.Println(string(msg))
				continue
			}
			out, err := protojson.MarshalOptions{EmitUnpopulated: true}.Marshal(&wrapper)
			if err != nil {
				fmt.Println(wrapper.String())
				continue
			}
			fmt.Println(string(out))
		}
	}()

	sig := make(chan os.Signal, 1)
	signal.Notify(sig, syscall.SIGINT, syscall.SIGTERM)
	select {
	case <-sig:
	case <-time.After(15 * time.Second):
	case <-done:
	}
	fmt.Println("done")
}
