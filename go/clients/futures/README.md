# MEXC Futures SDK (Go)

Go client for **MEXC Futures REST and WebSocket** APIs.

Location in repo: `go/clients/futures/`

## Overview

- **REST**: `client.RestApi()` — typed methods with `context.Context`
- **WebSocket**: `client.WsStream()` — market streams and private login
- **Signing**: separate stack in `signer.go` / `http_client.go` (not Spot v3)

## Installation / import

```go
import "github.com/mexcdevelop/mexc-api-demo/go/clients/futures"
```

```bash
cd go && go mod tidy
```

## Initialization

### Public REST / public WebSocket

```go
cfg := futures.DefaultConfig()
client := futures.NewClient(cfg)
api := client.RestApi()
```

### Private REST / WebSocket

```go
cfg := futures.DefaultConfig()
cfg.WithAPIKey("YOUR_API_KEY", "YOUR_API_SECRET")
client := futures.NewClient(cfg)
```

Optional fields on `futures.Config`: `BaseURL`, `WSURL`, `RecvWindow`, `Timeout`, `Debug`, reconnect settings — see `config.go`.

## Minimal examples

### Public REST — ping

```go
ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
defer cancel()

resp, err := client.RestApi().Ping(ctx)
if err != nil { /* handle */ }
fmt.Println(resp.Text)
```

### Public REST — market deals

```go
resp, err := client.RestApi().GetDeals(ctx, "BTC_USDT", 20)
```

### Private REST — assets

```go
cfg := futures.DefaultConfig()
cfg.WithAPIKey(os.Getenv("MEXC_API_KEY"), os.Getenv("MEXC_API_SECRET"))
client := futures.NewClient(cfg)

resp, err := client.RestApi().GetAssets(ctx)
```

### WebSocket — ticker stream

```go
ws := client.WsStream()
ws.OnMessage = func(_ string, msg map[string]any) { fmt.Println(msg) }
ws.OnError = func(err error) { fmt.Println(err) }

ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
defer cancel()

if err := ws.Connect(ctx); err != nil { /* handle */ }
_ = ws.SubTicker(map[string]any{"symbol": "BTC_USDT"})
<-ctx.Done()
ws.Disconnect()
```

Private WS channels require API credentials on the same `Config`.

## Directory layout

```
clients/futures/
├── client.go           # NewClient → RestApi() / WsStream()
├── config.go           # Config, DefaultConfig, WithAPIKey
├── endpoints.go        # Path constants
├── http_client.go      # HTTP transport
├── signer.go           # Request signing
├── rest_api.go         # RestAPI facade
├── rest_api_*.go       # Domain methods (market, order, position, …)
├── ws_stream.go        # WebSocket client
├── internal/
│   └── actionrunner/   # Dev-only; used by examples/dev/
└── examples/           # By API doc section + dev/
```

Public SDK surface: `NewClient`, `RestApi()`, `WsStream()`. Do not import `internal/` from application code.

## Examples (supplementary)

Grouped by Futures API docs: `MarketData/`, `Account/`, `Order/`, `Position/`, `PlanOrder/`, `StopOrder/`, `TrackOrder/`, `SelfTradePrevention/`, `WebSocket/`.

```bash
cd go

# Public
go run ./clients/futures/examples/MarketData/Ping.go

# Private — go/.env with MEXC_API_KEY / MEXC_API_SECRET
go run ./clients/futures/examples/Account/GetAssets.go

# WebSocket
go run ./clients/futures/examples/WebSocket/Ticker.go
```

Mapping: [examples/README.md](examples/README.md).

`examples/dev/` — interactive REST/WS runners (`DEVONLY`); not public API.

## Related

- [../../README.md](../../README.md) · [../README.md](../README.md)
