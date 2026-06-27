package spot

func (r *RestAPI) QueryCurrencyInfo(jsonParams string) interface{} {
	return r.client.PrivateGet(PathCapitalConfigGetall, jsonParams)
}

func (r *RestAPI) Withdraw(jsonParams string) interface{} {
	return r.client.PrivatePost(PathCapitalWithdraw, jsonParams)
}

func (r *RestAPI) WithdrawApply(jsonParams string) interface{} {
	return r.client.PrivatePost(PathCapitalWithdrawApply, jsonParams)
}

func (r *RestAPI) CancelWithdraw(jsonParams string) interface{} {
	return r.client.PrivateDelete(PathCapitalWithdraw, jsonParams)
}

func (r *RestAPI) DepositHistory(jsonParams string) interface{} {
	return r.client.PrivateGet(PathCapitalDepositHisrec, jsonParams)
}

func (r *RestAPI) WithdrawHistory(jsonParams string) interface{} {
	return r.client.PrivateGet(PathCapitalWithdrawHistory, jsonParams)
}

func (r *RestAPI) GenDepositAddress(jsonParams string) interface{} {
	return r.client.PrivatePost(PathCapitalDepositAddress, jsonParams)
}

func (r *RestAPI) DepositAddress(jsonParams string) interface{} {
	return r.client.PrivateGet(PathCapitalDepositAddress, jsonParams)
}

func (r *RestAPI) WithdrawAddress(jsonParams string) interface{} {
	return r.client.PrivateGet(PathCapitalWithdrawAddress, jsonParams)
}

func (r *RestAPI) Transfer(jsonParams string) interface{} {
	return r.client.PrivatePost(PathCapitalTransfer, jsonParams)
}

func (r *RestAPI) TransferHistory(jsonParams string) interface{} {
	return r.client.PrivateGet(PathCapitalTransfer, jsonParams)
}

func (r *RestAPI) TransferHistoryById(jsonParams string) interface{} {
	return r.client.PrivateGet(PathCapitalTransferTranId, jsonParams)
}

func (r *RestAPI) ConvertList(jsonParams string) interface{} {
	return r.client.PrivateGet(PathCapitalConvertList, jsonParams)
}

func (r *RestAPI) Convert(jsonParams string) interface{} {
	return r.client.PrivatePost(PathCapitalConvert, jsonParams)
}

func (r *RestAPI) ConvertHistory(jsonParams string) interface{} {
	return r.client.PrivateGet(PathCapitalConvert, jsonParams)
}

func (r *RestAPI) InternalTransfer(jsonParams string) interface{} {
	return r.client.PrivatePost(PathCapitalTransferInternal, jsonParams)
}

func (r *RestAPI) InternalTransferHistory(jsonParams string) interface{} {
	return r.client.PrivateGet(PathCapitalTransferInternal, jsonParams)
}
