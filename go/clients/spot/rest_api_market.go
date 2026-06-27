package spot

func (r *RestAPI) Ping(jsonParams string) interface{} {
	return r.client.Public(PathPing, jsonParams)
}

func (r *RestAPI) Time(jsonParams string) interface{} {
	return r.client.Public(PathTime, jsonParams)
}

func (r *RestAPI) ApiSymbol(jsonParams string) interface{} {
	return r.client.Public(PathDefaultSymbols, jsonParams)
}

func (r *RestAPI) ExchangeInfo(jsonParams string) interface{} {
	return r.client.Public(PathExchangeInfo, jsonParams)
}

func (r *RestAPI) Depth(jsonParams string) interface{} {
	return r.client.Public(PathDepth, jsonParams)
}

func (r *RestAPI) Trades(jsonParams string) interface{} {
	return r.client.Public(PathTrades, jsonParams)
}

func (r *RestAPI) AggTrades(jsonParams string) interface{} {
	return r.client.Public(PathAggTrades, jsonParams)
}

func (r *RestAPI) Kline(jsonParams string) interface{} {
	return r.client.Public(PathKlines, jsonParams)
}

func (r *RestAPI) AvgPrice(jsonParams string) interface{} {
	return r.client.PrivateGet(PathAvgPrice, jsonParams)
}

func (r *RestAPI) Ticker24hr(jsonParams string) interface{} {
	return r.client.Public(PathTicker24hr, jsonParams)
}

func (r *RestAPI) Price(jsonParams string) interface{} {
	return r.client.Public(PathTickerPrice, jsonParams)
}

func (r *RestAPI) BookTicker(jsonParams string) interface{} {
	return r.client.Public(PathTickerBookTicker, jsonParams)
}

func (r *RestAPI) QueryOfflineSymbols(jsonParams string) interface{} {
	return r.client.Public(PathSymbolOffline, jsonParams)
}
