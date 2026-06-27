# MEXC P2P SDK (Node.js)

Node.js client for **MEXC P2P (Fiat)** REST and **chat WebSocket**.

Location in repo: `node.js/clients/p2p/`  
Workspace package: `mexc-p2p-sdk`

## Overview

- REST methods on **`MexcP2P`** instance (`client.p2POrderDetail()`, …)
- Chat WebSocket via **`client.createChatWs()`** or `P2PChatWsClient`
- Uses [`mexc-common`](../../common/) for REST signing

All P2P REST endpoints require **private** credentials.

## Installation

```bash
cd node.js
npm install
```

```javascript
const { MexcP2P, P2PChatWsClient } = require('./clients/p2p')
```

## Initialization

```javascript
const client = new MexcP2P({
  apiKey: process.env.MEXC_API_KEY,
  apiSecret: process.env.MEXC_API_SECRET
})
```

## Minimal examples

### Private REST — order detail

```javascript
const { data } = await client.p2POrderDetail({ advOrderNo: 'YOUR_ORDER_ID' })
```

### Private REST — user data stream (listen key)

```javascript
const { data } = await client.p2PUserDataStreamPost({})
```

### WebSocket — chat

```javascript
const ws = client.createChatWs({
  listenKey: process.env.MEXC_P2P_LISTEN_KEY,
  conversationId: process.env.MEXC_P2P_CONVERSATION_ID
})

ws.on('open', () => console.log('connected'))
ws.on('message', (msg) => console.log(msg.fromNickName, msg.content))
ws.connect()
```

Or use `P2PChatWsClient` directly from the package exports.

## Directory layout

```
clients/p2p/
├── index.js
├── package.json
├── src/
│   ├── index.js          # MexcP2P + WS exports
│   ├── client.js         # createChatWs()
│   ├── p2p.js            # REST mixin
│   ├── rest/
│   └── websocket/        # Chat WS client
└── examples/
    ├── _lib.js
    ├── Market/
    ├── Order/
    └── WebSocket/
```

## Examples (supplementary)

```bash
cd node.js/clients/p2p
cp .env.example .env

node examples/Order/P2POrderDetail.js
node examples/WebSocket/WsChat.js   # needs listen key + conversation id
```

Mapping: [examples/README.md](examples/README.md).

## Related

- [../../README.md](../../README.md) · [../README.md](../README.md)
