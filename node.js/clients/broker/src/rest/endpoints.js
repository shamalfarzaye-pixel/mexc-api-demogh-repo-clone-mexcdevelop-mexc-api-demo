/**
 * MEXC BROKER REST path constants.
 * Align with go/clients/broker/endpoints.go
 */

const PREFIX = '/api/v3'

module.exports = {
  PREFIX,
  broker: {
    BROKER_CAPITAL_DEPOSIT_SUBADDRESS: '/api/v3/broker/capital/deposit/subAddress',
    BROKER_CAPITAL_DEPOSIT_SUBHISREC: '/api/v3/broker/capital/deposit/subHisrec',
    BROKER_CAPITAL_DEPOSIT_SUBHISREC_GETALL: '/api/v3/broker/capital/deposit/subHisrec/getall',
    BROKER_CAPITAL_WITHDRAW_APPLY: '/api/v3/broker/capital/withdraw/apply',
    BROKER_REBATE_TAXQUERY: '/api/v3/broker/rebate/taxQuery',
    BROKER_SUB_ACCOUNT_APIKEY: '/api/v3/broker/sub-account/apiKey',
    BROKER_SUB_ACCOUNT_FUTURES: '/api/v3/broker/sub-account/futures',
    BROKER_SUB_ACCOUNT_LIST: '/api/v3/broker/sub-account/list',
    BROKER_SUB_ACCOUNT_STATUS: '/api/v3/broker/sub-account/status',
    BROKER_SUB_ACCOUNT_UNIVERSALTRANSFER: '/api/v3/broker/sub-account/universalTransfer',
    BROKER_SUB_ACCOUNT_VIRTUALSUBACCOUNT: '/api/v3/broker/sub-account/virtualSubAccount',
  },
}
