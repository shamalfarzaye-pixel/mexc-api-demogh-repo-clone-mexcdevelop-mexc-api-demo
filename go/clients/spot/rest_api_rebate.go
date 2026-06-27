package spot

func (r *RestAPI) RebateHistory(jsonParams string) interface{} {
	return r.client.PrivateGet(PathRebateTaxQuery, jsonParams)
}

func (r *RestAPI) RebateDetail(jsonParams string) interface{} {
	return r.client.PrivateGet(PathRebateDetail, jsonParams)
}

func (r *RestAPI) SelfRecordsDetail(jsonParams string) interface{} {
	return r.client.PrivateGet(PathRebateDetailKickback, jsonParams)
}

func (r *RestAPI) ReferCode(jsonParams string) interface{} {
	return r.client.PrivateGet(PathRebateReferCode, jsonParams)
}

func (r *RestAPI) AffiliateCommission(jsonParams string) interface{} {
	return r.client.PrivateGet(PathRebateAffiliateCommission, jsonParams)
}

func (r *RestAPI) AffiliateWithdraw(jsonParams string) interface{} {
	return r.client.PrivateGet(PathRebateAffiliateWithdraw, jsonParams)
}

func (r *RestAPI) AffiliateCommissionDetail(jsonParams string) interface{} {
	return r.client.PrivateGet(PathRebateAffiliateCommissionDetail, jsonParams)
}

func (r *RestAPI) AffiliateReferral(jsonParams string) interface{} {
	return r.client.PrivateGet(PathRebateAffiliateReferral, jsonParams)
}

func (r *RestAPI) Subaffiliates(jsonParams string) interface{} {
	return r.client.PrivateGet(PathRebateAffiliateSubaffiliates, jsonParams)
}

func (r *RestAPI) AffiliateCampaign(jsonParams string) interface{} {
	return r.client.PrivateGet(PathRebateAffiliateCampaign, jsonParams)
}

func (r *RestAPI) AffiliateList(jsonParams string) interface{} {
	return r.client.PrivateGet(PathRebateAffiliateList, jsonParams)
}
