# MEXC Go SDK

Go client libraries for MEXC **Spot**, **Futures**, **P2P**, and **Broker** APIs. The code is organized as shared `common/` plus independent `clients/*` packages.

This README is the **entry point for the Go tree**. Each product client also has its own README with install, init, and call examples — you do not need to run `examples/` first to integrate the SDK.

## Layout

```
go/
├── common/                 # Shared Spot v3 HTTP, signing, config helpers
│   ├── spotv3/             # REST client used by Spot / Broker / P2P
│   └── config/             # Optional global constants (keep empty in git)
├── clients/
│   ├── spot/               # Spot v3 REST
│   ├── futures/            # Futures REST + WebSocket (own signing stack)
│   ├── p2p/                # P2P REST + chat WebSocket
│   └── broker/             # Broker REST (/broker/*)
├── go.mod
└── README.md               # ← you are here
```

## Module path

```
github.com/mexcdevelop/mexc-api-demo/go
```

Clone this repository (or copy the `go/` tree into your project) and reference the module path above in your `go.mod`, or use a `replace` directive during local development.

## Installation

```bash
cd go
go mod tidy
```

Requires **Go 1.18+**.

## Credentials

| Client | Config type | Notes |
|--------|-------------|-------|
| Spot, Broker, P2P | `spotv3.Config{APIKey, APISecret, BaseURL?}` | Public market endpoints work with empty credentials |
| Futures | `futures.Config` via `futures.DefaultConfig()` | Set `APIKey` / `APISecret` for private REST and WS login |

Pass credentials in code (recommended for apps) or via environment variables when running **examples** (`MEXC_API_KEY`, `MEXC_API_SECRET` — see `go/.env.example`).

Do **not** commit real keys. `common/config/config.go` is for optional local constants only; keep it empty in version control.

## Minimal usage (formal API)

### Spot — public REST

```go
import (
    "fmt"
    "github.com/mexcdevelop/mexc-api-demo/go/clients/spot"
    spotv3 "github.com/mexcdevelop/mexc-api-demo/go/common/spotv3"
)

func main() {
    client := spot.NewClient(spotv3.Config{})
    fmt.Println(client.RestApi().Ping(""))
}
```

### Spot — private REST

```go
client := spot.NewClient(spotv3.Config{
    APIKey:    os.Getenv("MEXC_API_KEY"),
    APISecret: os.Getenv("MEXC_API_SECRET"),
})
client.RestApi().SpotAccountInfo("")
```

### Futures — public + private + WebSocket

```go
import (
    "context"
    "time"
    "github.com/mexcdevelop/mexc-api-demo/go/clients/futures"
)

cfg := futures.DefaultConfig()
cfg.WithAPIKey(os.Getenv("MEXC_API_KEY"), os.Getenv("MEXC_API_SECRET"))

connector := futures.NewClient(cfg)
ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
defer cancel()

connector.RestApi().Ping(ctx)                    // public
connector.RestApi().GetAssets(ctx)               // private (needs keys)
ws := connector.WsStream()
ws.OnMessage = func(_ string, msg map[string]any) { fmt.Println(msg) }
ws.Connect(ctx)
ws.SubTicker(map[string]any{"symbol": "BTC_USDT"})
```

## Where to read next

| Topic | README |
|-------|--------|
| All clients overview | [clients/README.md](clients/README.md) |
| Spot | [clients/spot/README.md](clients/spot/README.md) |
| Futures | [clients/futures/README.md](clients/futures/README.md) |
| P2P | [clients/p2p/README.md](clients/p2p/README.md) |
| Broker | [clients/broker/README.md](clients/broker/README.md) |
| Shared Spot v3 HTTP | [common/README.md](common/README.md) |

## Examples (supplementary)

The `clients/*/examples/` directories are **runnable references** grouped by English API doc sections. They help verify connectivity and cover more endpoints than this README.

They are **not** the primary integration path. Use the client APIs above in your own `main` or service.

```bash
cd go

# Public — no credentials
go run ./clients/spot/examples/MarketData/Ping.go
go run ./clients/futures/examples/MarketData/Ping.go

# Private — set MEXC_API_KEY / MEXC_API_SECRET (see .env.example)
go run ./clients/spot/examples/Trading/SpotAccountInfo.go
go run ./clients/futures/examples/Account/GetAssets.go
```

See each client's `examples/README.md` for the full doc-section mapping.

`clients/futures/examples/dev/` contains interactive dev runners only (see `dev/DEVONLY`); not part of the public SDK surface.
