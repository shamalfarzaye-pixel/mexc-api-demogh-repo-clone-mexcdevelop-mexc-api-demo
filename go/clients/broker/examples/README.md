# Broker examples (Go)

Examples are grouped to mirror the **Broker API** English documentation sections.

## How to run

```bash
cd node.js/clients/broker
cp .env.example .env   # fill credentials
node examples/SubAccount/BrokerSubAccountVirtualSubAccountPost.js
```

## Doc section mapping

| API docs section | Examples directory | Auth |
|------------------|-------------------|------|
| Sub-Account Endpoints | `SubAccount/` | private |
| Deposit Endpoints | `Deposit/` | private |
| Rebate Endpoints | `Rebate/` | private |
| Transfer Endpoints | `Transfer/` | private |
| Withdraw Endpoints | `Withdraw/` | private |

## Endpoint coverage

### Sub-Account Endpoints → `SubAccount/`

- **BrokerSubAccountVirtualSubAccountPost** → `SubAccount/BrokerSubAccountVirtualSubAccountPost.js` (private)
- **BrokerSubAccountApiKeyPost** → `SubAccount/BrokerSubAccountApiKeyPost.js` (private)
- **BrokerSubAccountApiKeyDelete** → `SubAccount/BrokerSubAccountApiKeyDelete.js` (private)
- **BrokerSubAccountFuturesPost** → `SubAccount/BrokerSubAccountFuturesPost.js` (private)
- **BrokerSubAccountList** → `SubAccount/BrokerSubAccountList.js` (private)
- **BrokerSubAccountStatus** → `SubAccount/BrokerSubAccountStatus.js` (private)
- **BrokerSubAccountApiKey** → `SubAccount/BrokerSubAccountApiKey.js` (private)

### Deposit Endpoints → `Deposit/`

- **BrokerCapitalDepositSubAddress** → `Deposit/BrokerCapitalDepositSubAddress.js` (private)
- **BrokerCapitalDepositSubAddressPost** → `Deposit/BrokerCapitalDepositSubAddressPost.js` (private)
- **BrokerCapitalDepositSubHisrecGetall** → `Deposit/BrokerCapitalDepositSubHisrecGetall.js` (private)
- **BrokerCapitalDepositSubHisrec** → `Deposit/BrokerCapitalDepositSubHisrec.js` (private)

### Rebate Endpoints → `Rebate/`

- **BrokerRebateTaxQuery** → `Rebate/BrokerRebateTaxQuery.js` (private)

### Transfer Endpoints → `Transfer/`

- **BrokerSubAccountUniversalTransfer** → `Transfer/BrokerSubAccountUniversalTransfer.js` (private)
- **BrokerSubAccountUniversalTransferPost** → `Transfer/BrokerSubAccountUniversalTransferPost.js` (private)

### Withdraw Endpoints → `Withdraw/`

- **BrokerCapitalWithdrawApplyPost** → `Withdraw/BrokerCapitalWithdrawApplyPost.js` (private)

