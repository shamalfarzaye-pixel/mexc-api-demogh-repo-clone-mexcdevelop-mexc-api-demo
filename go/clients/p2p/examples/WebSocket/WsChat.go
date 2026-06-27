package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/mexcdevelop/mexc-api-demo/go/clients/p2p"
)

func main() {
	listenKey := os.Getenv("MEXC_P2P_LISTEN_KEY")
	conversationID := os.Getenv("MEXC_P2P_CONVERSATION_ID")
	if listenKey == "" || conversationID == "" {
		fmt.Println("Set MEXC_P2P_LISTEN_KEY and MEXC_P2P_CONVERSATION_ID")
		os.Exit(1)
	}

	ws := p2p.NewChatWSClient(p2p.ChatWSConfig{
		ListenKey: listenKey, ConversationID: conversationID,
	})
	ws.OnMessage = func(msg p2p.ChatMessage) {
		fmt.Println(msg.FromNickName, msg.Content)
	}
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	if err := ws.Connect(ctx); err != nil {
		fmt.Println(err)
		return
	}
	sig := make(chan os.Signal, 1)
	signal.Notify(sig, syscall.SIGINT, syscall.SIGTERM)
	<-sig
	ws.Disconnect()
}
