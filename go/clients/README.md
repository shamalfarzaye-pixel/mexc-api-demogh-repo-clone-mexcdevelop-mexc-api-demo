# MEXC Go Clients

Four independent client packages under `go/clients/`, each with its own README, REST surface, and `examples/` directory.

Use this page as a **directory index**. For install, initialization, and calling patterns, open the client README directly.

## Clients

| Client | API domain | Import path | REST | WebSocket | README |
|--------|------------|-------------|------|-----------|--------|
| **Spot** | Spot v3 | `github.com/mexcdevelop/mexc-api-demo/go/clients/spot` | ✓ | examples `WebSocket/` | [spot/README.md](spot/README.md) |
| **Futures** | Contract / Futures | `.../clients/futures` | ✓ | `WsStream()` | [futures/README.md](futures/README.md) |
| **P2P** | Fiat / P2P | `.../clients/p2p` | ✓ | `NewChatWSClient()` | [p2p/README.md](p2p/README.md) |
| **Broker** | Broker `/broker/*` | `.../clients/broker` | ✓ | — | [broker/README.md](broker/README.md) |

## Shared code (`common/`)

Spot, Broker, and P2P REST clients share HTTP and signing via [`../common/spotv3`](../common/spotv3). Futures uses its own `http_client.go` / `signer.go` stack.

```
go/common/
├── spotv3/     # Config, SpotClient, signing helpers
└── config/     # Optional global constants (not required)
```

## Formal entry points

| Client | Create | REST | WebSocket |
|--------|--------|------|-----------|
| Spot | `spot.NewClient(spotv3.Config{...})` | `client.RestApi()` | — (see `examples/WebSocket/`) |
| Futures | `futures.NewClient(cfg)` | `client.RestApi()` | `client.WsStream()` |
| P2P | `p2p.NewClient(spotv3.Config{...})` | `client.RestApi()` | `p2p.NewChatWSClient(...)` |
| Broker | `broker.NewClient(spotv3.Config{...})` | `client.RestApi()` | — |

## Examples vs SDK usage

| | **SDK (your project)** | **examples/ (this repo)** |
|--|--------------------------|---------------------------|
| Purpose | Integrate into applications | Quick verification & API coverage |
| Credentials | Your config / env | `go/.env` (from `.env.example`) |
| Discovery | Client README + godoc | `examples/README.md` per client |

Run examples from the `go/` module root:

```bash
go run ./clients/spot/examples/MarketData/Ping.go
go run ./clients/futures/examples/MarketData/GetDeals.go
go run ./clients/p2p/examples/Order/P2POrderDetail.go
go run ./clients/broker/examples/SubAccount/BrokerSubAccountList.go
```

Futures `examples/dev/` is for interactive development only — not public API.
