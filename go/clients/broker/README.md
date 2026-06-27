# MEXC Broker SDK (Go)

Go client for **MEXC Broker** REST API (`/broker/*`).

Location in repo: `go/clients/broker/`

## Overview

- **REST only** — sub-accounts, deposits, rebates, transfers, withdrawals
- Uses Spot v3 HTTP/signing via [`../../common/spotv3`](../../common/spotv3)
- All endpoints are **private** (API key required)

## Installation / import

```go
import (
    "github.com/mexcdevelop/mexc-api-demo/go/clients/broker"
    spotv3 "github.com/mexcdevelop/mexc-api-demo/go/common/spotv3"
)
```

```bash
cd go && go mod tidy
```

## Initialization

```go
client := broker.NewClient(spotv3.Config{
    APIKey:    "YOUR_API_KEY",
    APISecret: "YOUR_API_SECRET",
})
api := client.RestApi()
```

REST methods take a **JSON parameter string**.

## Minimal examples

### Private REST — list sub-accounts

```go
result := api.BrokerSubAccountList(`{"page":"1","limit":"10"}`)
fmt.Println(result)
```

### Private REST — query rebate

```go
result := api.BrokerRebateTaxQuery(`{"page":"1","limit":"10"}`)
fmt.Println(result)
```

## Directory layout

```
clients/broker/
├── client.go           # NewClient → RestApi()
├── endpoints.go
├── rest_api.go
├── rest_api_broker.go  # Broker methods
└── examples/           # SubAccount, Deposit, Rebate, Transfer, Withdraw
```

## Examples (supplementary)

```bash
cd go

# Private — go/.env with MEXC_API_KEY / MEXC_API_SECRET
go run ./clients/broker/examples/SubAccount/BrokerSubAccountList.go
go run ./clients/broker/examples/Rebate/BrokerRebateTaxQuery.go
```

Mapping: [examples/README.md](examples/README.md).

## Related

- [../../README.md](../../README.md) · [../README.md](../README.md)
