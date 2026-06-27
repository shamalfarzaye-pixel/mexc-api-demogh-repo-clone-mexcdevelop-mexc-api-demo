# MEXC Spot SDK (Go)

Go client for the **MEXC Spot v3 REST API** (`/api/v3/*`).

Location in repo: `go/clients/spot/`

## Overview

- **REST**: all Spot v3 endpoints via `client.RestApi()`
- **WebSocket**: see `examples/WebSocket/` (not part of the REST facade)
- **Shared HTTP**: [`../../common/spotv3`](../../common/spotv3)

## Installation / import

Module: `github.com/mexcdevelop/mexc-api-demo/go`

```go
import (
    "github.com/mexcdevelop/mexc-api-demo/go/clients/spot"
    spotv3 "github.com/mexcdevelop/mexc-api-demo/go/common/spotv3"
)
```

From the repo:

```bash
cd go && go mod tidy
```

## Initialization

### Public client (market data)

No API key required.

```go
client := spot.NewClient(spotv3.Config{})
api := client.RestApi()
```

### Private client (account, trade, wallet, …)

```go
client := spot.NewClient(spotv3.Config{
    APIKey:    "YOUR_API_KEY",
    APISecret: "YOUR_API_SECRET",
    // BaseURL: "https://api.mexc.com/api/v3", // optional override
})
api := client.RestApi()
```

REST methods take a **JSON parameter string** (use `""` when there are no params).

## Minimal examples

### Public REST — ping

```go
result := api.Ping("")
fmt.Println(result)
```

### Public REST — depth

```go
result := api.Depth(`{"symbol":"BTCUSDT","limit":"5"}`)
fmt.Println(result)
```

### Private REST — account info

```go
client := spot.NewClient(spotv3.Config{
    APIKey:    os.Getenv("MEXC_API_KEY"),
    APISecret: os.Getenv("MEXC_API_SECRET"),
})
result := client.RestApi().SpotAccountInfo("")
fmt.Println(result)
```

### WebSocket (supplementary)

The REST SDK does not expose a unified WS client. Use the examples below:

- **Go** — protobuf public stream: `examples/WebSocket/ProtobufStream.go`
- **Go** — listen key user stream: `examples/WebSocket/PrivateUserDataStream.go`
- **Node.js** — protobuf public stream: `node.js/clients/spot/examples/WebSocket/ProtobufStream.js`
- **Node.js** — private user stream: `node.js/clients/spot/examples/WebSocket/PrivateUserDataStream.js`

Protobuf definitions: `websocket/proto/` (generated Go types in `websocket/pb/`; canonical source also in `node.js/clients/spot/src/websocket/`).

## Directory layout

```
clients/spot/
├── client.go              # NewClient → RestApi()
├── endpoints.go           # Path constants
├── rest_api.go            # RestAPI type
├── rest_api_market.go     # MarketData methods
├── rest_api_trade.go      # Trading
├── rest_api_wallet.go     # Wallet
├── rest_api_account.go    # Account
├── rest_api_subaccount.go # SubAccount
├── rest_api_listenkey.go  # UserDataStream (listen key)
├── rest_api_rebate.go     # Rebate
├── websocket/
│   ├── proto/             # .proto sources (from Node spot src/websocket)
│   └── pb/                # generated *.pb.go
└── examples/              # Runnable samples (by API doc section)
```

## Examples (supplementary)

`examples/` mirrors the **English Spot v3 API documentation** sections (`MarketData/`, `Trading/`, `Wallet/`, …). Use them to verify connectivity and browse endpoint coverage — not as your app's entry point.

```bash
cd go

# Public
go run ./clients/spot/examples/MarketData/Ping.go
go run ./clients/spot/examples/MarketData/Depth.go
go run ./clients/spot/examples/WebSocket/ProtobufStream.go

# Private — copy go/.env.example → go/.env and fill keys
go run ./clients/spot/examples/Trading/SpotAccountInfo.go
```

Full mapping: [examples/README.md](examples/README.md).

## Related

- Go workspace overview: [../../README.md](../../README.md)
- All clients index: [../README.md](../README.md)
