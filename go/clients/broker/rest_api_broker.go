package broker

func (r *RestAPI) BrokerSubAccountVirtualSubAccountPost(jsonParams string) interface{} {
	return r.client.PrivatePost(PathBrokerSubAccountVirtualSubAccount, jsonParams)
}

func (r *RestAPI) BrokerSubAccountApiKeyPost(jsonParams string) interface{} {
	return r.client.PrivatePost(PathBrokerSubAccountApiKey, jsonParams)
}

func (r *RestAPI) BrokerSubAccountApiKeyDelete(jsonParams string) interface{} {
	return r.client.PrivateDelete(PathBrokerSubAccountApiKey, jsonParams)
}

func (r *RestAPI) BrokerCapitalDepositSubAddress(jsonParams string) interface{} {
	return r.client.PrivateGet(PathBrokerCapitalDepositSubAddress, jsonParams)
}

func (r *RestAPI) BrokerSubAccountFuturesPost(jsonParams string) interface{} {
	return r.client.PrivatePost(PathBrokerSubAccountFutures, jsonParams)
}

func (r *RestAPI) BrokerCapitalDepositSubAddressPost(jsonParams string) interface{} {
	return r.client.PrivatePost(PathBrokerCapitalDepositSubAddress, jsonParams)
}

func (r *RestAPI) BrokerRebateTaxQuery(jsonParams string) interface{} {
	return r.client.PrivateGet(PathBrokerRebateTaxQuery, jsonParams)
}

func (r *RestAPI) BrokerCapitalDepositSubHisrecGetall(jsonParams string) interface{} {
	return r.client.PrivateGet(PathBrokerCapitalDepositSubHisrecGetall, jsonParams)
}

func (r *RestAPI) BrokerCapitalDepositSubHisrec(jsonParams string) interface{} {
	return r.client.PrivateGet(PathBrokerCapitalDepositSubHisrec, jsonParams)
}

func (r *RestAPI) BrokerSubAccountList(jsonParams string) interface{} {
	return r.client.PrivateGet(PathBrokerSubAccountList, jsonParams)
}

func (r *RestAPI) BrokerSubAccountStatus(jsonParams string) interface{} {
	return r.client.PrivateGet(PathBrokerSubAccountStatus, jsonParams)
}

func (r *RestAPI) BrokerSubAccountApiKey(jsonParams string) interface{} {
	return r.client.PrivateGet(PathBrokerSubAccountApiKey, jsonParams)
}

func (r *RestAPI) BrokerSubAccountUniversalTransfer(jsonParams string) interface{} {
	return r.client.PrivateGet(PathBrokerSubAccountUniversalTransfer, jsonParams)
}

func (r *RestAPI) BrokerSubAccountUniversalTransferPost(jsonParams string) interface{} {
	return r.client.PrivatePost(PathBrokerSubAccountUniversalTransfer, jsonParams)
}

func (r *RestAPI) BrokerCapitalWithdrawApplyPost(jsonParams string) interface{} {
	return r.client.PrivatePost(PathBrokerCapitalWithdrawApply, jsonParams)
}
