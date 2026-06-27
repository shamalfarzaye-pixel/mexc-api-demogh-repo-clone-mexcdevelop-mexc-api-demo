package spot

func (r *RestAPI) KycStatus(jsonParams string) interface{} {
	return r.client.PrivateGet(PathKycStatus, jsonParams)
}

func (r *RestAPI) QueryUid(jsonParams string) interface{} {
	return r.client.PrivateGet(PathUid, jsonParams)
}

func (r *RestAPI) ApiKeyInfo(jsonParams string) interface{} {
	return r.client.PrivatePost(PathApiKeyInfo, jsonParams)
}

func (r *RestAPI) TradeFee(jsonParams string) interface{} {
	return r.client.PrivateGet(PathTradeFee, jsonParams)
}

func (r *RestAPI) CreateStpGroup(jsonParams string) interface{} {
	return r.client.PrivatePost(PathStrategyGroup, jsonParams)
}

func (r *RestAPI) QueryStpGroup(jsonParams string) interface{} {
	return r.client.PrivateGet(PathStrategyGroup, jsonParams)
}

func (r *RestAPI) DeleteStpGroup(jsonParams string) interface{} {
	return r.client.PrivateDelete(PathStrategyGroup, jsonParams)
}

func (r *RestAPI) AddUidToStpGroup(jsonParams string) interface{} {
	return r.client.PrivatePost(PathStrategyGroupUid, jsonParams)
}

func (r *RestAPI) DeleteUidFromStpGroup(jsonParams string) interface{} {
	return r.client.PrivateDelete(PathStrategyGroupUid, jsonParams)
}
