# P2P examples (Node.js)

Examples are grouped to mirror the **P2P API** English documentation sections.

## How to run

```bash
cd node.js/clients/p2p
cp .env.example .env   # fill credentials
node examples/Market/P2PMarketAdsPagination.js
```

## Doc section mapping

| API docs section | Examples directory | Auth |
|------------------|-------------------|------|
| Market Endpoints | `Market/` | private |
| Merchant Endpoints | `Merchant/` | private |
| Order Endpoints | `Order/` | private |
| User Data Stream Endpoints | `UserDataStream/` | private |
| Chat Endpoints | `Chat/` | private |
| File Endpoints | `File/` | private |
## WebSocket examples

- `WebSocket/WsChat.js` — P2P chat WebSocket (private)

## Endpoint coverage

### Market Endpoints → `Market/`

- **P2PMarketAdsPagination** → `Market/P2PMarketAdsPagination.js` (private)
- **P2PMarketOrderPaginationV2** → `Market/P2PMarketOrderPaginationV2.js` (private)

### Merchant Endpoints → `Merchant/`

- **P2PMerchantOrderPaginationV2** → `Merchant/P2PMerchantOrderPaginationV2.js` (private)
- **P2PMerchantAdsPagination** → `Merchant/P2PMerchantAdsPagination.js` (private)
- **P2PMerchantServiceSwitchPost** → `Merchant/P2PMerchantServiceSwitchPost.js` (private)
- **P2PMerchantAdsSaveOrUpdatePost** → `Merchant/P2PMerchantAdsSaveOrUpdatePost.js` (private)
- **P2PMerchantOrderDealPost** → `Merchant/P2PMerchantOrderDealPost.js` (private)

### Order Endpoints → `Order/`

- **P2POrderDetail** → `Order/P2POrderDetail.js` (private)
- **P2PConfirmPaidPost** → `Order/P2PConfirmPaidPost.js` (private)
- **P2PReleaseCoinPost** → `Order/P2PReleaseCoinPost.js` (private)

### User Data Stream Endpoints → `UserDataStream/`

- **P2PUserDataStreamPost** → `UserDataStream/P2PUserDataStreamPost.js` (private)
- **P2PUserDataStream** → `UserDataStream/P2PUserDataStream.js` (private)

### Chat Endpoints → `Chat/`

- **P2PRetrieveChatConversation** → `Chat/P2PRetrieveChatConversation.js` (private)
- **P2PRetrieveChatMessageWithPagination** → `Chat/P2PRetrieveChatMessageWithPagination.js` (private)

### File Endpoints → `File/`

- **P2PDownloadFile** → `File/P2PDownloadFile.js` (private)
- **P2PUploadFilePost** → `File/P2PUploadFilePost.js` (private)

