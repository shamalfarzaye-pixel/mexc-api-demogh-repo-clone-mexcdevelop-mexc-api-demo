# MEXC Broker SDK (Node.js)

Node.js client for **MEXC Broker** REST API (`/broker/*`).

Location in repo: `node.js/clients/broker/`  
Workspace package: `mexc-broker-sdk`

## Overview

- REST methods on **`MexcBroker`** instance
- Uses [`mexc-common`](../../common/) for HTTP/signing
- **Private only** — all broker endpoints require API credentials
- No WebSocket in this client

## Installation

```bash
cd node.js
npm install
```

```javascript
const { MexcBroker } = require('./clients/broker')
```

## Initialization

```javascript
const client = new MexcBroker({
  apiKey: process.env.MEXC_API_KEY,
  apiSecret: process.env.MEXC_API_SECRET
})
```

## Minimal examples

### Private REST — list sub-accounts

```javascript
const { data } = await client.brokerSubAccountList({ page: '1', limit: '10' })
console.log(data)
```

### Private REST — rebate query

```javascript
const { data } = await client.brokerRebateTaxQuery({ page: '1', limit: '10' })
```

## Directory layout

```
clients/broker/
├── index.js
├── package.json
├── src/
│   ├── index.js
│   ├── client.js         # MexcBroker
│   ├── broker.js         # REST mixin
│   └── rest/
└── examples/
    ├── _lib.js
    ├── SubAccount/
    ├── Deposit/
    ├── Rebate/
    ├── Transfer/
    └── Withdraw/
```

## Examples (supplementary)

```bash
cd node.js/clients/broker
cp .env.example .env

node examples/SubAccount/BrokerSubAccountList.js
node examples/Rebate/BrokerRebateTaxQuery.js
```

Mapping: [examples/README.md](examples/README.md).

## Related

- [../../README.md](../../README.md) · [../README.md](../README.md)
