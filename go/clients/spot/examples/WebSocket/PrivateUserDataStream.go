package main

import (
	"encoding/json"
	"fmt"
	"os"
	"os/signal"
	"path/filepath"
	"syscall"
	"time"

	"github.com/mexcdevelop/mexc-api-demo/go/clients/spot"
	spotv3 "github.com/mexcdevelop/mexc-api-demo/go/common/spotv3"
	"github.com/gorilla/websocket"
	"github.com/joho/godotenv"
)

func findDotEnv() string {
	dir, err := os.Getwd()
	if err != nil {
		return ""
	}
	for i := 0; i < 6; i++ {
		candidate := filepath.Join(dir, ".env")
		if fi, err := os.Stat(candidate); err == nil && !fi.IsDir() {
			return candidate
		}
		parent := filepath.Dir(dir)
		if parent == dir {
			break
		}
		dir = parent
	}
	return ""
}

func main() {
	_ = godotenv.Load(findDotEnv())
	client := spot.NewClient(spotv3.Config{
		APIKey:    os.Getenv("MEXC_API_KEY"),
		APISecret: os.Getenv("MEXC_API_SECRET"),
	})
	api := client.RestApi()

	raw := api.CreateListenKey("")
	m, ok := raw.(map[string]interface{})
	if !ok {
		fmt.Println("unexpected response:", raw)
		os.Exit(1)
	}
	listenKey, _ := m["listenKey"].(string)
	if listenKey == "" {
		fmt.Println("no listenKey in response")
		os.Exit(1)
	}
	fmt.Println("listenKey acquired")

	url := "wss://wbs-api.mexc.com/ws?listenKey=" + listenKey
	ws, _, err := websocket.DefaultDialer.Dial(url, nil)
	if err != nil {
		fmt.Println("dial:", err)
		os.Exit(1)
	}
	defer ws.Close()

	done := make(chan struct{})
	go func() {
		for {
			_, msg, err := ws.ReadMessage()
			if err != nil {
				close(done)
				return
			}
			var pretty json.RawMessage
			if json.Unmarshal(msg, &pretty) == nil {
				fmt.Println(string(pretty))
			} else {
				fmt.Println(string(msg))
			}
		}
	}()

	sig := make(chan os.Signal, 1)
	signal.Notify(sig, syscall.SIGINT, syscall.SIGTERM)
	select {
	case <-sig:
	case <-time.After(15 * time.Second):
	}
	fmt.Println("done")
}
