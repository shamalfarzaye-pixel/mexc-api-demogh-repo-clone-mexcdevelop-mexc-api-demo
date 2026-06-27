package p2p

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"sync"
	"time"

	"github.com/gorilla/websocket"
)

const (
	DefaultChatWSURL = "wss://fiat.mexc.com/ws"
	chatPingInterval = 5 * time.Second

	ChatMessageTypeText  = 1
	ChatMessageTypeImage = 2
	ChatMessageTypeVideo = 3
	ChatMessageTypeFile  = 4
)

// ChatWSConfig holds connection parameters for P2P WebSocket chat.
type ChatWSConfig struct {
	ListenKey      string
	ConversationID string
	WSURL          string
	AutoReconnect  bool
}

// SendMessageParams is the JSON body embedded in SEND_MESSAGE params.
type SendMessageParams struct {
	Content        string `json:"content"`
	ConversationID int64  `json:"conversationId"`
	Type           int    `json:"type"`
	ImageURL       string `json:"imageUrl"`
	ImageThumbURL  string `json:"imageThumbUrl"`
	VideoURL       string `json:"videoUrl"`
	FileURL        string `json:"fileUrl"`
}

// ChatMessage is a parsed RECEIVE_MESSAGE payload.
type ChatMessage struct {
	ID             int64  `json:"id"`
	Content        string `json:"content"`
	ConversationID int64  `json:"conversationId"`
	Type           int    `json:"type"`
	ImageURL       string `json:"imageUrl"`
	ImageThumbURL  string `json:"imageThumbUrl"`
	VideoURL       string `json:"videoUrl"`
	FileURL        string `json:"fileUrl"`
	CreateTime     string `json:"createTime"`
	Self           bool   `json:"self"`
	FromUserID     string `json:"fromUserId"`
	FromNickName   string `json:"fromNickName"`
}

// ChatWSResponse is a server WebSocket frame.
type ChatWSResponse struct {
	Success bool   `json:"success"`
	Method  string `json:"method"`
	Msg     string `json:"msg"`
	Data    string `json:"data"`
}

// ChatWSClient is a WebSocket client for P2P chat.
type ChatWSClient struct {
	cfg ChatWSConfig

	dialer *websocket.Dialer

	mu               sync.Mutex
	writeMu          sync.Mutex
	conn             *websocket.Conn
	manualDisconnect bool
	autoReconnect    bool
	reconnectAttempts int
	pingStop         chan struct{}

	OnOpen    func()
	OnClose   func(code int, text string)
	OnError   func(err error)
	OnMessage func(msg ChatMessage)
	OnPong    func()
	OnSendAck func(resp ChatWSResponse)
	OnRaw     func(resp ChatWSResponse)
}

// BuildChatWSURL builds wss://fiat.mexc.com/ws?listenKey=...&conversationId=...
func BuildChatWSURL(listenKey, conversationID string) string {
	q := url.Values{}
	q.Set("listenKey", listenKey)
	q.Set("conversationId", conversationID)
	return DefaultChatWSURL + "?" + q.Encode()
}

// NewChatWSClient creates a P2P chat WebSocket client.
func NewChatWSClient(cfg ChatWSConfig) *ChatWSClient {
	if cfg.WSURL == "" {
		cfg.WSURL = BuildChatWSURL(cfg.ListenKey, cfg.ConversationID)
	}
	return &ChatWSClient{
		cfg:           cfg,
		autoReconnect: cfg.AutoReconnect,
		dialer:        websocket.DefaultDialer,
	}
}

// Connect dials the WebSocket and starts read/ping loops.
func (c *ChatWSClient) Connect(ctx context.Context) error {
	if c.cfg.ListenKey == "" || c.cfg.ConversationID == "" {
		return fmt.Errorf("listenKey and conversationId are required")
	}

	type dialResult struct {
		conn *websocket.Conn
		err  error
	}
	done := make(chan dialResult, 1)
	go func() {
		conn, _, err := c.dialer.DialContext(ctx, c.cfg.WSURL, http.Header{})
		done <- dialResult{conn: conn, err: err}
	}()

	var conn *websocket.Conn
	select {
	case r := <-done:
		if r.err != nil {
			return r.err
		}
		conn = r.conn
	case <-ctx.Done():
		return ctx.Err()
	}

	c.mu.Lock()
	c.conn = conn
	c.manualDisconnect = false
	c.reconnectAttempts = 0
	c.mu.Unlock()

	c.startPingLoop()
	go c.readLoop(conn)

	if c.OnOpen != nil {
		c.OnOpen()
	}
	return nil
}

// Disconnect closes the connection and stops heartbeat/reconnect.
func (c *ChatWSClient) Disconnect() {
	c.mu.Lock()
	c.manualDisconnect = true
	conn := c.conn
	c.conn = nil
	c.mu.Unlock()

	c.stopPingLoop()
	if conn != nil {
		_ = conn.Close()
	}
}

// Ping sends {"method":"PING"}. Server replies with data "PONG".
func (c *ChatWSClient) Ping() error {
	return c.sendJSON(map[string]string{"method": "PING"})
}

// SendMessage sends {"method":"SEND_MESSAGE","params":"<json>"}.
func (c *ChatWSClient) SendMessage(params SendMessageParams) error {
	body, err := json.Marshal(params)
	if err != nil {
		return err
	}
	return c.sendJSON(map[string]string{
		"method": "SEND_MESSAGE",
		"params": string(body),
	})
}

// TextMessage builds a text chat message (type=1).
func TextMessage(conversationID int64, content string) SendMessageParams {
	return SendMessageParams{
		Content:        content,
		ConversationID: conversationID,
		Type:           ChatMessageTypeText,
	}
}

func (c *ChatWSClient) sendJSON(v any) error {
	b, err := json.Marshal(v)
	if err != nil {
		return err
	}
	c.writeMu.Lock()
	defer c.writeMu.Unlock()

	c.mu.Lock()
	conn := c.conn
	c.mu.Unlock()
	if conn == nil {
		return fmt.Errorf("websocket not connected")
	}
	return conn.WriteMessage(websocket.TextMessage, b)
}

func (c *ChatWSClient) startPingLoop() {
	c.stopPingLoop()
	stop := make(chan struct{})
	c.mu.Lock()
	c.pingStop = stop
	c.mu.Unlock()

	go func() {
		ticker := time.NewTicker(chatPingInterval)
		defer ticker.Stop()
		for {
			select {
			case <-stop:
				return
			case <-ticker.C:
				if err := c.Ping(); err != nil && c.OnError != nil {
					c.OnError(err)
				}
			}
		}
	}()
}

func (c *ChatWSClient) stopPingLoop() {
	c.mu.Lock()
	stop := c.pingStop
	c.pingStop = nil
	c.mu.Unlock()
	if stop != nil {
		close(stop)
	}
}

func (c *ChatWSClient) readLoop(conn *websocket.Conn) {
	defer func() {
		c.stopPingLoop()
		c.mu.Lock()
		manual := c.manualDisconnect
		auto := c.autoReconnect
		attempts := c.reconnectAttempts
		c.conn = nil
		c.mu.Unlock()

		if c.OnClose != nil {
			c.OnClose(0, "")
		}
		if !manual && auto {
			c.scheduleReconnect(attempts)
		}
	}()

	for {
		_, data, err := conn.ReadMessage()
		if err != nil {
			if c.OnError != nil && !c.manualDisconnect {
				c.OnError(err)
			}
			return
		}
		c.handleMessage(data)
	}
}

func (c *ChatWSClient) scheduleReconnect(attempts int) {
	delay := time.Duration(1<<min(attempts, 6)) * time.Second
	if delay > 60*time.Second {
		delay = 60 * time.Second
	}
	c.mu.Lock()
	c.reconnectAttempts = attempts + 1
	c.mu.Unlock()

	time.AfterFunc(delay, func() {
		c.mu.Lock()
		manual := c.manualDisconnect
		c.mu.Unlock()
		if manual {
			return
		}
		ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
		defer cancel()
		_ = c.Connect(ctx)
	})
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func (c *ChatWSClient) handleMessage(data []byte) {
	var resp ChatWSResponse
	if err := json.Unmarshal(data, &resp); err != nil {
		if c.OnError != nil {
			c.OnError(fmt.Errorf("parse message: %w", err))
		}
		return
	}
	if c.OnRaw != nil {
		c.OnRaw(resp)
	}

	switch resp.Method {
	case "PING":
		if resp.Success && c.OnPong != nil {
			c.OnPong()
		}
	case "SEND_MESSAGE":
		if c.OnSendAck != nil {
			c.OnSendAck(resp)
		}
	case "RECEIVE_MESSAGE":
		if resp.Data == "" || c.OnMessage == nil {
			return
		}
		var msg ChatMessage
		if err := json.Unmarshal([]byte(resp.Data), &msg); err != nil {
			if c.OnError != nil {
				c.OnError(fmt.Errorf("parse chat message: %w", err))
			}
			return
		}
		c.OnMessage(msg)
	}
}
