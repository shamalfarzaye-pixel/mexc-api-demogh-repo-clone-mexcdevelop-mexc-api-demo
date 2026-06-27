/**
 * Public WebSocket — protobuf market stream
 * API docs: Spot v3 → WebSocket Market Streams
 * Run: node examples/WebSocket/ProtobufStream.js
 */
const path = require('path')
const WebSocket = require('ws')
const protobuf = require('protobufjs')

const protoDir = path.join(__dirname, '../../src/websocket')
const protoPath = path.join(protoDir, 'PushDataV3ApiWrapper.proto')
let PushDataV3ApiWrapper

const BASE_URL = 'wss://wbs-api.mexc.com/ws'
const subscribeMessage = {{
  method: 'SUBSCRIPTION',
  params: ['spot@public.aggre.deals.v3.api.pb@10ms@BTCUSDT']
}}

function wsOptions () {{
  const proxy = process.env.https_proxy || process.env.HTTPS_PROXY ||
    process.env.http_proxy || process.env.HTTP_PROXY
  if (!proxy) return {{}}
  const {{ HttpsProxyAgent }} = require('https-proxy-agent')
  console.log('WebSocket via proxy:', proxy)
  return {{ agent: new HttpsProxyAgent(proxy) }}
}}

protobuf.load(protoPath, (err, root) => {{
  if (err) throw err
  PushDataV3ApiWrapper = root.lookupType('PushDataV3ApiWrapper')
  createWebSocket()
}})

function createWebSocket () {{
  const ws = new WebSocket(BASE_URL, wsOptions())
  ws.on('open', () => {{ ws.send(JSON.stringify(subscribeMessage)) }})
  ws.on('message', (data) => {{
    try {{ console.log(PushDataV3ApiWrapper.decode(data)) }}
    catch {{ console.log(data.toString()) }}
  }})
  ws.on('error', (err) => console.error(err?.message ?? err))
}}
