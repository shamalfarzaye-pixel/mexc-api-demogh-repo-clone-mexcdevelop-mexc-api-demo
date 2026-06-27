package main

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/mexcdevelop/mexc-api-demo/go/clients/broker"
	spotv3 "github.com/mexcdevelop/mexc-api-demo/go/common/spotv3"
	"github.com/joho/godotenv"
)

func findDotEnv() string {
	dir, err := os.Getwd()
	if err != nil {
		return ""
	}
	for i := 0; i < 6; i++ {
		candidate := filepath.Join(dir, ".env")
		if fi, err := os.Stat(candidate); err == nil && !fi.IsDir() {
			return candidate
		}
		parent := filepath.Dir(dir)
		if parent == dir {
			break
		}
		dir = parent
	}
	return ""
}

func main() {
	_ = godotenv.Load(findDotEnv())
	client := broker.NewClient(spotv3.Config{
		APIKey:    os.Getenv("MEXC_API_KEY"),
		APISecret: os.Getenv("MEXC_API_SECRET"),
	})
	api := client.RestApi()

	result := api.BrokerSubAccountList(`{"page":"1","limit":"10"}`)
	fmt.Println(result)
}
