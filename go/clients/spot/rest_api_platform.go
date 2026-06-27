package spot

func (r *RestAPI) GetAnnouncements(jsonParams string) interface{} {
	return r.client.Public(PathAnnouncements, jsonParams)
}
