const ENDPOINTS = require('./endpoints')

const Broker = superclass => class extends superclass {

  // Create a Sub-account
  brokerSubAccountVirtualSubAccountPost(options = {}) {
    return this.signRequest('POST', ENDPOINTS.broker.BROKER_SUB_ACCOUNT_VIRTUALSUBACCOUNT, options)
  }

  // Create an APIKey for a Sub-account
  brokerSubAccountApiKeyPost(options = {}) {
    return this.signRequest('POST', ENDPOINTS.broker.BROKER_SUB_ACCOUNT_APIKEY, options)
  }

  // Delete the APIKey of a Sub-account
  brokerSubAccountApiKeyDelete(options = {}) {
    return this.signRequest('DELETE', ENDPOINTS.broker.BROKER_SUB_ACCOUNT_APIKEY, options)
  }

  // Deposit Address of Sub-account
  brokerCapitalDepositSubAddress(options = {}) {
    return this.signRequest('GET', ENDPOINTS.broker.BROKER_CAPITAL_DEPOSIT_SUBADDRESS, options)
  }

  // Enable Futures for Sub-account
  brokerSubAccountFuturesPost(options = {}) {
    return this.signRequest('POST', ENDPOINTS.broker.BROKER_SUB_ACCOUNT_FUTURES, options)
  }

  // Generate Deposit Address of Sub-account
  brokerCapitalDepositSubAddressPost(options = {}) {
    return this.signRequest('POST', ENDPOINTS.broker.BROKER_CAPITAL_DEPOSIT_SUBADDRESS, options)
  }

  // Get Broker Rebate History Records
  brokerRebateTaxQuery(options = {}) {
    return this.signRequest('GET', ENDPOINTS.broker.BROKER_REBATE_TAXQUERY, options)
  }

  // Query All Sub-account Deposit History
  brokerCapitalDepositSubHisrecGetall(options = {}) {
    return this.signRequest('GET', ENDPOINTS.broker.BROKER_CAPITAL_DEPOSIT_SUBHISREC_GETALL, options)
  }

  // Query Sub-account Deposit History
  brokerCapitalDepositSubHisrec(options = {}) {
    return this.signRequest('GET', ENDPOINTS.broker.BROKER_CAPITAL_DEPOSIT_SUBHISREC, options)
  }

  // Query Sub-account List
  brokerSubAccountList(options = {}) {
    return this.signRequest('GET', ENDPOINTS.broker.BROKER_SUB_ACCOUNT_LIST, options)
  }

  // Query Sub-account Status
  brokerSubAccountStatus(options = {}) {
    return this.signRequest('GET', ENDPOINTS.broker.BROKER_SUB_ACCOUNT_STATUS, options)
  }

  // Query the APIKey of a Sub-account
  brokerSubAccountApiKey(options = {}) {
    return this.signRequest('GET', ENDPOINTS.broker.BROKER_SUB_ACCOUNT_APIKEY, options)
  }

  // Query Universal Transfer History - broker user
  brokerSubAccountUniversalTransfer(options = {}) {
    return this.signRequest('GET', ENDPOINTS.broker.BROKER_SUB_ACCOUNT_UNIVERSALTRANSFER, options)
  }

  // Universal Transfer
  brokerSubAccountUniversalTransferPost(options = {}) {
    return this.signRequest('POST', ENDPOINTS.broker.BROKER_SUB_ACCOUNT_UNIVERSALTRANSFER, options)
  }

  // Withdraw
  brokerCapitalWithdrawApplyPost(options = {}) {
    return this.signRequest('POST', ENDPOINTS.broker.BROKER_CAPITAL_WITHDRAW_APPLY, options)
  }

}

module.exports = Broker