# MEXC Node.js Clients

Four workspace packages under `node.js/clients/`. Each is self-contained with `src/`, `examples/`, and its own README.

## Clients

| Client | npm workspace name | REST | WebSocket | README |
|--------|-------------------|------|-----------|--------|
| **Spot** | `mexc-spot-sdk` | ✓ | protobuf demos in `src/websocket/` | [spot/README.md](spot/README.md) |
| **Futures** | `mexc-futures-sdk` | ✓ | `client.wsStreams` | [futures/README.md](futures/README.md) |
| **P2P** | `mexc-p2p-sdk` | ✓ | `client.createChatWs()` | [p2p/README.md](p2p/README.md) |
| **Broker** | `mexc-broker-sdk` | ✓ | — | [broker/README.md](broker/README.md) |

## Install

From workspace root:

```bash
cd node.js
npm install
```

## Require paths (this repo)

```javascript
const { MexcSpot } = require('./clients/spot')       // or require('mexc-spot-sdk')
const { MexcFutures } = require('./clients/futures')
const { MexcP2P } = require('./clients/p2p')
const { MexcBroker } = require('./clients/broker')
```

Within a client package:

```javascript
const { MexcSpot } = require('./src')
```

## Shared `common/`

[`../common/`](../common/) (`mexc-common`) provides `APIBase`, `createClient`, signing helpers used by Spot, Broker, and P2P. Futures has its own REST/WS stack under `clients/futures/src/`.

## Formal vs examples

| | **SDK in your app** | **`examples/` in repo** |
|--|---------------------|-------------------------|
| Import | `require('./clients/spot')` etc. | `require('../_lib')` helpers |
| Config | Constructor / env in your code | `clients/*/.env` (from `.env.example`) |
| Scope | Minimal integration | Full API doc coverage |

```bash
node clients/spot/examples/MarketData/Ping.js
npm run example:rest:public --prefix clients/futures
```

Futures `examples/dev/` — dev-only runners; see `dev/DEVONLY`.
