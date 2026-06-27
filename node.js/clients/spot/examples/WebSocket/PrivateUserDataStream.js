/**
 * Private WebSocket — user data stream (listen key)
 * API docs: Spot v3 → User Data Stream (Listen Key) Endpoints
 * Run: node examples/WebSocket/PrivateUserDataStream.js
 *
 * Requires MEXC_API_KEY / MEXC_API_SECRET in .env (creates listen key automatically).
 */
const WebSocket = require('ws')
const { createPrivateClient } = require('../_lib')

const BASE_URL = 'wss://wbs-api.mexc.com/ws?listenKey='

function wsOptions () {
  const proxy = process.env.https_proxy || process.env.HTTPS_PROXY ||
    process.env.http_proxy || process.env.HTTP_PROXY
  if (!proxy) return {}
  const { HttpsProxyAgent } = require('https-proxy-agent')
  return { agent: new HttpsProxyAgent(proxy) }
}

const client = createPrivateClient()

client.CreateListenKey()
  .then((res) => {
    const listenKey = res?.data?.listenKey ?? res?.listenKey
    if (!listenKey) throw new Error('no listenKey in response')
    console.log('listenKey acquired')
    const ws = new WebSocket(BASE_URL + listenKey, wsOptions())
    ws.on('open', () => console.log('connected'))
    ws.on('message', (data) => console.log(data.toString()))
    ws.on('error', (err) => console.error(err?.message ?? err))
    setTimeout(() => { ws.close(); process.exit(0) }, 15000)
  })
  .catch((err) => console.error(err?.response?.data ?? err?.message ?? err))
