package p2p

func (r *RestAPI) P2PMarketAdsPagination(jsonParams string) interface{} {
	return r.client.PrivateGet(PathFiatMarketAdsPagination, jsonParams)
}

func (r *RestAPI) P2PMarketOrderPaginationV2(jsonParams string) interface{} {
	return r.client.PrivateGet(PathFiatMarketOrderPaginationV, jsonParams)
}

func (r *RestAPI) P2PMerchantOrderPaginationV2(jsonParams string) interface{} {
	return r.client.PrivateGet(PathFiatMerchantOrderPaginationV, jsonParams)
}

func (r *RestAPI) P2PMerchantAdsPagination(jsonParams string) interface{} {
	return r.client.PrivateGet(PathFiatMerchantAdsPagination, jsonParams)
}

func (r *RestAPI) P2POrderDetail(jsonParams string) interface{} {
	return r.client.PrivateGet(PathFiatOrderDetail, jsonParams)
}

func (r *RestAPI) P2PMerchantServiceSwitchPost(jsonParams string) interface{} {
	return r.client.PrivatePost(PathFiatMerchantServiceSwitch, jsonParams)
}

func (r *RestAPI) P2PMerchantAdsSaveOrUpdatePost(jsonParams string) interface{} {
	return r.client.PrivatePost(PathFiatMerchantAdsSaveOrUpdate, jsonParams)
}

func (r *RestAPI) P2PDownloadFile(jsonParams string) interface{} {
	return r.client.PrivateGet(PathFiatDownloadFile, jsonParams)
}

func (r *RestAPI) P2PUserDataStreamPost(jsonParams string) interface{} {
	return r.client.PrivatePost(PathUserDataStream, jsonParams)
}

func (r *RestAPI) P2PUserDataStream(jsonParams string) interface{} {
	return r.client.PrivateGet(PathUserDataStream, jsonParams)
}

func (r *RestAPI) P2PRetrieveChatConversation(jsonParams string) interface{} {
	return r.client.PrivateGet(PathFiatRetrieveChatConversation, jsonParams)
}

func (r *RestAPI) P2PRetrieveChatMessageWithPagination(jsonParams string) interface{} {
	return r.client.PrivateGet(PathFiatRetrieveChatMessageWithPagination, jsonParams)
}

func (r *RestAPI) P2PUploadFilePost(jsonParams string) interface{} {
	return r.client.PrivatePost(PathFiatUploadFile, jsonParams)
}

func (r *RestAPI) P2PConfirmPaidPost(jsonParams string) interface{} {
	return r.client.PrivatePost(PathFiatConfirmPaid, jsonParams)
}

func (r *RestAPI) P2PMerchantOrderDealPost(jsonParams string) interface{} {
	return r.client.PrivatePost(PathFiatMerchantOrderDeal, jsonParams)
}

func (r *RestAPI) P2PReleaseCoinPost(jsonParams string) interface{} {
	return r.client.PrivatePost(PathFiatReleaseCoin, jsonParams)
}
