# MEXC Spot SDK (Node.js)

Node.js client for the **MEXC Spot v3 REST API**.

Location in repo: `node.js/clients/spot/`  
Workspace package: `mexc-spot-sdk`

## Overview

- REST methods are on the **`MexcSpot` instance** (e.g. `client.ping()`, `client.depth()`)
- Built on [`mexc-common`](../../common/) (`APIBase` + `createClient`)
- WebSocket protobuf helpers live under `src/websocket/` (used by examples, not a separate connector class)

## Installation

**In this monorepo:**

```bash
cd node.js
npm install
```

```javascript
const { MexcSpot } = require('./clients/spot')
// or, from another workspace package:
const { MexcSpot } = require('mexc-spot-sdk')
```

## Initialization

### Public client

```javascript
const client = new MexcSpot()
// optional: new MexcSpot({ baseURL: 'https://api.mexc.com' })
```

### Private client

```javascript
const client = new MexcSpot({
  apiKey: process.env.MEXC_API_KEY,
  apiSecret: process.env.MEXC_API_SECRET
})

// or positional:
// new MexcSpot(apiKey, apiSecret, { baseURL: '...' })
```

## Minimal examples

### Public REST — ping

```javascript
const { data } = await client.ping()
console.log(data)
```

### Public REST — depth

```javascript
const { data } = await client.depth({ symbol: 'BTCUSDT', limit: 5 })
```

### Private REST — account

```javascript
const privateClient = new MexcSpot({
  apiKey: process.env.MEXC_API_KEY,
  apiSecret: process.env.MEXC_API_SECRET
})
const { data } = await privateClient.accountInformation()
```

### WebSocket — protobuf market stream (supplementary)

See `examples/WebSocket/ProtobufStream.js` for a standalone `ws` + `protobufjs` demo. Requires devDependencies (`ws`, `protobufjs`).

```bash
npm run example:ws
```

Private user stream via listen key: `examples/WebSocket/PrivateUserDataStream.js`.

## Directory layout

```
clients/spot/
├── index.js              # Re-exports src
├── package.json
├── src/
│   ├── index.js          # MexcSpot export
│   ├── client.js         # Connector class
│   ├── spot.js           # createClient( Spot REST mixin )
│   ├── rest/
│   │   ├── spot.js       # Endpoint methods
│   │   └── endpoints.js
│   └── websocket/        # Protobuf proto + helpers
└── examples/
    ├── _lib.js           # createPublicClient / createPrivateClient
    ├── MarketData/       # … by API doc section
    ├── Trading/
    └── WebSocket/
```

## Examples (supplementary)

Grouped by Spot v3 API docs. Use for quick tests and browsing endpoints — integrate via `MexcSpot` in your own code.

```bash
cd node.js/clients/spot
cp .env.example .env          # for private examples

node examples/MarketData/Ping.js
node examples/MarketData/Depth.js
npm run example:ping
```

Mapping: [examples/README.md](examples/README.md).

## Related

- [../../README.md](../../README.md) · [../README.md](../README.md)
