# MEXC P2P SDK (Go)

Go client for **MEXC P2P (Fiat)** REST and **chat WebSocket**.

Location in repo: `go/clients/p2p/`

## Overview

- **REST**: Spot v3–style signing on `/fiat/*` paths via `client.RestApi()`
- **WebSocket**: P2P chat via `p2p.NewChatWSClient`
- **Shared HTTP**: [`../../common/spotv3`](../../common/spotv3)

All P2P REST endpoints require **private** credentials.

## Installation / import

```go
import (
    "github.com/mexcdevelop/mexc-api-demo/go/clients/p2p"
    spotv3 "github.com/mexcdevelop/mexc-api-demo/go/common/spotv3"
)
```

```bash
cd go && go mod tidy
```

## Initialization

```go
client := p2p.NewClient(spotv3.Config{
    APIKey:    "YOUR_API_KEY",
    APISecret: "YOUR_API_SECRET",
})
api := client.RestApi()
```

REST methods take a **JSON parameter string** (`""` if empty).

## Minimal examples

### Private REST — order detail

```go
result := api.P2POrderDetail(`{"advOrderNo":"YOUR_ORDER_ID"}`)
fmt.Println(result)
```

### Private REST — create listen key (user data stream)

```go
result := api.P2PUserDataStreamPost("")
fmt.Println(result)
```

### WebSocket — chat

Obtain `listenKey` (user data stream) and `conversationId` from REST first.

```go
ws := p2p.NewChatWSClient(p2p.ChatWSConfig{
    ListenKey:      os.Getenv("MEXC_P2P_LISTEN_KEY"),
    ConversationID: os.Getenv("MEXC_P2P_CONVERSATION_ID"),
})
ws.OnMessage = func(msg p2p.ChatMessage) {
    fmt.Println(msg.FromNickName, msg.Content)
}

ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
defer cancel()

if err := ws.Connect(ctx); err != nil { /* handle */ }
<-ctx.Done()
ws.Disconnect()
```

## Directory layout

```
clients/p2p/
├── client.go           # NewClient → RestApi()
├── endpoints.go
├── rest_api.go
├── rest_api_p2p.go     # P2P REST methods
├── ws_chat.go          # ChatWSClient
└── examples/           # Market, Merchant, Order, Chat, …
```

## Examples (supplementary)

```bash
cd go

# Private — go/.env with MEXC_API_KEY / MEXC_API_SECRET
go run ./clients/p2p/examples/Order/P2POrderDetail.go

# Chat WS — also needs MEXC_P2P_LISTEN_KEY, MEXC_P2P_CONVERSATION_ID
go run ./clients/p2p/examples/WebSocket/WsChat.go
```

Mapping: [examples/README.md](examples/README.md).

## Related

- [../../README.md](../../README.md) · [../README.md](../README.md)
