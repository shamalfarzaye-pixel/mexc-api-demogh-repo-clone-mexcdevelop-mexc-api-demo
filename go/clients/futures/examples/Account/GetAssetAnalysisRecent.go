package main

import (
	"context"
	"fmt"
	"os"
	"path/filepath"
	"time"

	"github.com/mexcdevelop/mexc-api-demo/go/clients/futures"
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
	cfg := futures.DefaultConfig()
	if key := os.Getenv("MEXC_API_KEY"); key != "" {
		cfg.WithAPIKey(key, os.Getenv("MEXC_API_SECRET"))
	}
	client := futures.NewClient(cfg).RestApi()

	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()

	resp, err := client.GetAssetAnalysisRecent(ctx, map[string]any{"currency": "USDT"})
	if err != nil {
		fmt.Println("error:", err)
		return
	}
	fmt.Println("response:", resp.Text)
}
