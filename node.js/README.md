# MEXC Node.js SDK

Node.js client libraries for MEXC **Spot**, **Futures**, **P2P**, and **Broker** APIs. Organized as an npm **workspace**: shared `common/` plus independent `clients/*` packages.

This README is the **entry point for the Node tree**. Each client has its own README with install, init, and call examples — integrate the SDK directly; `examples/` are supplementary.

## Layout

```
node.js/
├── common/                 # Shared Spot v3 HTTP + signing (mexc-common)
├── clients/
│   ├── spot/               # Spot v3 REST (+ WS protobuf under src/websocket/)
│   ├── futures/            # Futures REST + WebSocket
│   ├── p2p/                # P2P REST + chat WebSocket
│   └── broker/             # Broker REST
├── package.json            # Workspace root
└── README.md               # ← you are here
```

## Installation (this repository)

```bash
cd node.js
npm install
```

Requires **Node.js 14+**. Packages are linked via workspaces (`mexc-common`, `mexc-spot-sdk`, …).

This monorepo does **not** assume published npm packages. Use `require()` paths as shown below, or workspace package names after `npm install`.

## Usage patterns by client

| Client | Entry class | REST | WebSocket |
|--------|---------------|------|-----------|
| Spot | `MexcSpot` | methods on client (`client.ping()`) | demos in `src/websocket/` |
| Futures | `MexcFutures` | `client.restApi.*` | `client.wsStreams` |
| P2P | `MexcP2P` | methods on client | `client.createChatWs()` |
| Broker | `MexcBroker` | methods on client | — |

## Minimal usage (formal API)

### Spot — public

```javascript
const { MexcSpot } = require('./clients/spot')

const client = new MexcSpot() // no keys for public endpoints
const { data } = await client.ping()
```

### Spot — private

```javascript
const client = new MexcSpot({
  apiKey: process.env.MEXC_API_KEY,
  apiSecret: process.env.MEXC_API_SECRET
})
const { data } = await client.accountInformation()
```

### Futures — REST + WebSocket

```javascript
const { MexcFutures } = require('./clients/futures')

const client = new MexcFutures(
  process.env.MEXC_API_KEY,
  process.env.MEXC_API_SECRET
)

await client.restApi.ping()
client.wsStreams.on('message', (msg) => console.log(msg))
client.wsStreams.connect()
client.wsStreams.subTicker({ symbol: 'BTC_USDT' })
```

## Where to read next

| Topic | README |
|-------|--------|
| All clients | [clients/README.md](clients/README.md) |
| Spot | [clients/spot/README.md](clients/spot/README.md) |
| Futures | [clients/futures/README.md](clients/futures/README.md) |
| P2P | [clients/p2p/README.md](clients/p2p/README.md) |
| Broker | [clients/broker/README.md](clients/broker/README.md) |
| Shared HTTP | [common/README.md](common/README.md) |

## Examples (supplementary)

Each `clients/*/examples/` tree is grouped by **English API documentation** sections. Examples use `_lib.js`, optional `.env` (from `.env.example`), and are for verification and interface coverage — **not** required to use the SDK.

```bash
cd node.js/clients/spot
cp .env.example .env   # fill keys for private examples
node examples/MarketData/Ping.js
npm run example:ping
```

See per-client `examples/README.md` for full mappings.

`clients/futures/examples/dev/` — interactive dev runners only; not public API.

## Credentials

- Copy `clients/<name>/.env.example` → `.env` locally (never commit `.env`)
- Or pass `{ apiKey, apiSecret }` / constructor args in application code
