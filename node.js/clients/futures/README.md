# MEXC Futures SDK (Node.js)

Node.js client for **MEXC Futures REST and WebSocket**.

Location in repo: `node.js/clients/futures/`  
Workspace package: `mexc-futures-sdk`

## Overview

- **REST**: `client.restApi` (`RestAPIClient`)
- **WebSocket**: `client.wsStreams` (`MexcFuturesWsClient`)
- Own signing / HTTP stack under `src/rest/` (not Spot v3 `mexc-common`)

## Installation

```bash
cd node.js
npm install
```

```javascript
const { MexcFutures } = require('./clients/futures')
// or: require('mexc-futures-sdk')
```

## Initialization

### Public REST / public WS

```javascript
const client = new MexcFutures()
```

### Private REST / WS

```javascript
const client = new MexcFutures(
  process.env.MEXC_API_KEY,
  process.env.MEXC_API_SECRET
)

// or object form:
// new MexcFutures({ apiKey, apiSecret, baseURL: 'https://api.mexc.com' })
```

## Minimal examples

### Public REST — ping

```javascript
const res = await client.restApi.ping()
console.log(res.data)
```

### Public REST — depth

```javascript
const res = await client.restApi.getDepth('BTC_USDT', 20)
```

### Private REST — assets

```javascript
const privateClient = new MexcFutures(apiKey, apiSecret)
const res = await privateClient.restApi.getAssets()
```

### WebSocket — ticker

```javascript
const client = new MexcFutures()

client.wsStreams.on('open', () => {
  client.wsStreams.subTicker({ symbol: 'BTC_USDT' })
})
client.wsStreams.on('message', (msg) => console.log(msg))
client.wsStreams.connect()

// later: client.wsStreams.disconnect()
```

## Directory layout

```
clients/futures/
├── index.js
├── package.json
├── src/
│   ├── index.js          # MexcFutures + low-level exports
│   ├── client.js         # MexcFutures connector
│   ├── rest/             # client.js, endpoints, httpClient, signer
│   └── websocket/        # MexcFuturesWsClient
└── examples/
    ├── _lib.js
    ├── MarketData/       # … by API doc section
    ├── Account/
    ├── Order/
    ├── WebSocket/
    └── dev/              # Interactive runners (DEVONLY)
```

## Advanced exports

`src/index.js` also exports `RestAPIClient`, `MexcFuturesWsClient`, `ENDPOINTS`, `signer`, `httpClient` for advanced use.

## Examples (supplementary)

```bash
cd node.js/clients/futures
cp .env.example .env

npm run example:rest:public    # MarketData/Ping.js
npm run example:rest:private   # Account/GetAssets.js
npm run example:ws             # WebSocket/Ticker.js
```

Mapping: [examples/README.md](examples/README.md).

`examples/dev/` — not public API; for local interactive testing.

## Related

- [../../README.md](../../README.md) · [../README.md](../README.md)
