package spot

func (r *RestAPI) CreateListenKey(jsonParams string) interface{} {
	return r.client.PrivatePost(PathUserDataStream, jsonParams)
}

func (r *RestAPI) QueryListenKeys(jsonParams string) interface{} {
	return r.client.PrivateGet(PathUserDataStream, jsonParams)
}

func (r *RestAPI) KeepListenKey(jsonParams string) interface{} {
	return r.client.PrivatePut(PathUserDataStream, jsonParams)
}

func (r *RestAPI) CloseListenKey(jsonParams string) interface{} {
	return r.client.PrivateDelete(PathUserDataStream, jsonParams)
}
