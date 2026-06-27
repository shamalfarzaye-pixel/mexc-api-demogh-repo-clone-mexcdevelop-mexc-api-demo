# MEXC Node.js Common

Shared HTTP transport and Spot v3 HMAC signing for Spot-based clients.

## Structure

```
common/
└── src/
    ├── index.js
    ├── http/
    │   ├── APIbase.js        # publicRequest / signRequest
    │   └── createClient.js   # mixin factory for REST clients
    └── helpers/
        ├── utils.js          # query builder, axios wrapper
        └── options.js        # normalizeOptions (shared constructor pattern)
```

## Usage

```javascript
const { APIBase, createClient, utils, normalizeOptions } = require('mexc-common')
```

## Used by

- `clients/spot`
- `clients/broker`
- `clients/p2p`

`clients/futures` uses its own signing stack (`src/rest/signer.js`).
