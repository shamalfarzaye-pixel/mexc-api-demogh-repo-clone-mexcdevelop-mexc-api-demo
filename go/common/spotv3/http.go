package spotv3

import (
	"github.com/mexcdevelop/mexc-api-demo/go/common/config"
	"github.com/mexcdevelop/mexc-api-demo/go/common/crypto"
	"encoding/json"
	"fmt"
	"log"
	"net/url"
	"strings"
	"sync"
	"time"

	"github.com/go-resty/resty/v2"
)

var (
	sharedClient     *resty.Client
	sharedClientOnce sync.Once
)

func getClient() *resty.Client {
	sharedClientOnce.Do(func() {
		sharedClient = resty.New()
	})
	return sharedClient
}

// PublicGet performs an unsigned GET request.
func PublicGet(urlStr string, jsonParams string) interface{} {
	return PublicGetWithAuth(urlStr, jsonParams, "")
}

// PublicGetWithAuth performs a public GET; apiKey is sent when non-empty.
func PublicGetWithAuth(urlStr string, jsonParams string, apiKey string) interface{} {
	path := urlStr
	if jsonParams != "" {
		strParams := JsonToParamStr(jsonParams)
		path = urlStr + "?" + strParams
		fmt.Println("路径:", path)
	}
	req := getClient().R()
	if apiKey != "" {
		req.SetHeader("X-MEXC-APIKEY", apiKey)
	}
	resp, err := req.Get(path)
	if err != nil {
		log.Fatal("请求报错：", err)
	}
	return resp
}

// PrivateGet performs a signed GET using global config credentials.
func PrivateGet(urlStr string, jsonParams string) interface{} {
	return PrivateRequest("GET", urlStr, jsonParams, config.API_KEY, config.SEC_KEY)
}

// PrivatePost performs a signed POST using global config credentials.
func PrivatePost(urlStr string, jsonParams string) interface{} {
	return PrivateRequest("POST", urlStr, jsonParams, config.API_KEY, config.SEC_KEY)
}

// PrivateDelete performs a signed DELETE using global config credentials.
func PrivateDelete(urlStr string, jsonParams string) interface{} {
	return PrivateRequest("DELETE", urlStr, jsonParams, config.API_KEY, config.SEC_KEY)
}

// PrivatePut performs a signed PUT using global config credentials.
func PrivatePut(urlStr string, jsonParams string) interface{} {
	return PrivateRequest("PUT", urlStr, jsonParams, config.API_KEY, config.SEC_KEY)
}

// PrivateRequest performs a signed Spot v3 request with explicit credentials.
func PrivateRequest(method, urlStr, jsonParams, apiKey, secKey string) interface{} {
	path := buildSignedPath(urlStr, jsonParams, secKey)
	req := getClient().R().SetHeaders(map[string]string{
		"X-MEXC-APIKEY": apiKey,
		"Content-Type":  "application/json",
	})
	var resp *resty.Response
	var err error
	switch strings.ToUpper(method) {
	case "GET":
		resp, err = req.Get(path)
	case "POST":
		resp, err = req.Post(path)
	case "DELETE":
		resp, err = req.Delete(path)
	case "PUT":
		resp, err = req.Put(path)
	default:
		log.Fatalf("unsupported HTTP method: %s", method)
	}
	if err != nil {
		log.Fatal("请求报错：", err)
	}
	return resp
}

func buildSignedPath(urlStr, jsonParams, secKey string) string {
	timestamp := time.Now().UnixNano() / 1e6
	fmt.Println(timestamp)
	var message string
	var strParams string
	if jsonParams == "" {
		message = fmt.Sprintf("timestamp=%d", timestamp)
	} else {
		strParams = JsonToParamStr(jsonParams)
		message = fmt.Sprintf("%s&timestamp=%d", strParams, timestamp)
		fmt.Println("message:", ParamsEncode(message))
	}
	sign := crypto.ComputeHmac256(message, secKey)
	fmt.Println("sign:", sign)
	var path string
	if jsonParams == "" {
		path = fmt.Sprintf("%s?timestamp=%d&signature=%s", urlStr, timestamp, sign)
	} else {
		path = fmt.Sprintf("%s?%s&timestamp=%d&signature=%s", urlStr, strParams, timestamp, sign)
	}
	fmt.Println("path:", path)
	return path
}

// JsonToParamStr converts a JSON object string to a URL query string.
func JsonToParamStr(jsonParams string) string {
	var paramsarr []string
	m := make(map[string]string)
	err := json.Unmarshal([]byte(jsonParams), &m)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Printf("map:%v\n", m)
	i := 0
	for key, value := range m {
		encodedValue := strings.Replace(url.QueryEscape(value), "+", "%20", -1)
		arritem := fmt.Sprintf("%s=%s", key, encodedValue)
		paramsarr = append(paramsarr, arritem)
		i++
		fmt.Println("遍历：", i, "总共", len(m))
		if i > len(m) {
			break
		}
	}
	paramsstr := strings.Join(paramsarr, "&")
	fmt.Println("参数字符串：", paramsstr)
	return paramsstr
}

// ParamsEncode URL-encodes a parameter string.
func ParamsEncode(paramStr string) string {
	return strings.Replace(url.QueryEscape(paramStr), "+", "%20", -1)
}
