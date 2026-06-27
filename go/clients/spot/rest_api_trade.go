package spot

func (r *RestAPI) SelfSymbols(jsonParams string) interface{} {
	return r.client.PrivateGet(PathSelfSymbols, jsonParams)
}

func (r *RestAPI) TestOrder(jsonParams string) interface{} {
	return r.client.PrivatePost(PathOrderTest, jsonParams)
}

func (r *RestAPI) PlaceOrder(jsonParams string) interface{} {
	return r.client.PrivatePost(PathOrder, jsonParams)
}

func (r *RestAPI) BatchOrder(jsonParams string) interface{} {
	return r.client.PrivatePost(PathBatchOrders, jsonParams)
}

func (r *RestAPI) CancelOrder(jsonParams string) interface{} {
	return r.client.PrivateDelete(PathOrder, jsonParams)
}

func (r *RestAPI) CancelAllOrders(jsonParams string) interface{} {
	return r.client.PrivateDelete(PathOpenOrders, jsonParams)
}

func (r *RestAPI) CancelAllOrdersAll(jsonParams string) interface{} {
	return r.client.PrivateDelete(PathOrderAll, jsonParams)
}

func (r *RestAPI) QueryOrder(jsonParams string) interface{} {
	return r.client.PrivateGet(PathOrder, jsonParams)
}

func (r *RestAPI) OpenOrder(jsonParams string) interface{} {
	return r.client.PrivateGet(PathOpenOrders, jsonParams)
}

func (r *RestAPI) AllOrders(jsonParams string) interface{} {
	return r.client.PrivateGet(PathAllOrders, jsonParams)
}

func (r *RestAPI) SpotAccountInfo(jsonParams string) interface{} {
	return r.client.PrivateGet(PathAccount, jsonParams)
}

func (r *RestAPI) SpotmyTrade(jsonParams string) interface{} {
	return r.client.PrivateGet(PathMyTrades, jsonParams)
}

func (r *RestAPI) MxDeduct(jsonParams string) interface{} {
	return r.client.PrivatePost(PathMxDeductEnable, jsonParams)
}

func (r *RestAPI) QueryMxDeduct(jsonParams string) interface{} {
	return r.client.PrivateGet(PathMxDeductEnable, jsonParams)
}
