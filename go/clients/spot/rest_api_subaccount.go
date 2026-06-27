package spot

func (r *RestAPI) CreateSub(jsonParams string) interface{} {
	return r.client.PrivatePost(PathSubAccountVirtualSubAccount, jsonParams)
}

func (r *RestAPI) QuerySub(jsonParams string) interface{} {
	return r.client.PrivateGet(PathSubAccountList, jsonParams)
}

func (r *RestAPI) CreateSubApikey(jsonParams string) interface{} {
	return r.client.PrivatePost(PathSubAccountApiKey, jsonParams)
}

func (r *RestAPI) QuerySubApikey(jsonParams string) interface{} {
	return r.client.PrivateGet(PathSubAccountApiKey, jsonParams)
}

func (r *RestAPI) DeleteSubApikey(jsonParams string) interface{} {
	return r.client.PrivateDelete(PathSubAccountApiKey, jsonParams)
}

func (r *RestAPI) UniTransfer(jsonParams string) interface{} {
	return r.client.PrivatePost(PathCapitalSubAccountUniversalTransfer, jsonParams)
}

func (r *RestAPI) QueryUniTransfer(jsonParams string) interface{} {
	return r.client.PrivateGet(PathCapitalSubAccountUniversalTransfer, jsonParams)
}

func (r *RestAPI) QuerySubAsset(jsonParams string) interface{} {
	return r.client.PrivateGet(PathSubAccountAsset, jsonParams)
}
