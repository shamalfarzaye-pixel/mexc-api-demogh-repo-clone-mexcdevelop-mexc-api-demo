# MEXC Go Common

Shared building blocks for Spot v3–based clients.

## Packages

| Package | Path | Purpose |
|---------|------|---------|
| `config` | `common/config` | Default URLs and credential placeholders |
| `crypto` | `common/crypto` | HMAC-SHA256 helper |
| `spotv3` | `common/spotv3` | Spot v3 HTTP + signing + `SpotClient` |

Futures (`clients/futures`) uses its own HTTP/signer (different protocol).

## Usage

```go
import (
    "github.com/mexcdevelop/mexc-api-demo/go/common/config"
    spotv3 "github.com/mexcdevelop/mexc-api-demo/go/common/spotv3"
)

client := spotv3.New(spotv3.Config{
    APIKey:    config.API_KEY,
    APISecret: config.SEC_KEY,
    BaseURL:   config.BASE_URL,
})
resp := client.Public("/ping", "")
```

Product connectors in `clients/spot`, `clients/broker`, `clients/p2p` wrap this client.
