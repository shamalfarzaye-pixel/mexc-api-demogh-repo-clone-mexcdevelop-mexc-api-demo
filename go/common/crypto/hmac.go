package crypto

import (
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
)

// ComputeHmac256 computes HMAC-SHA256 hex digest.
func ComputeHmac256(message, secKey string) string {
	h := hmac.New(sha256.New, []byte(secKey))
	h.Write([]byte(message))
	return hex.EncodeToString(h.Sum(nil))
}
