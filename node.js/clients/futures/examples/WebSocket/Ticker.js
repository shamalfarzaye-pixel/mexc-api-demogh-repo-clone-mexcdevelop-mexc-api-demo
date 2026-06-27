/**
 * Public WebSocket — ticker stream
 * API docs: Futures API → WebSocket Market Streams
 * Run: node examples/WebSocket/Ticker.js
 */
const { createPublicClient } = require('../_lib')

const client = createPublicClient()

client.wsStreams.on('open', () => {
  console.log('connected')
  client.wsStreams.subTicker({ symbol: 'BTC_USDT' })
})

client.wsStreams.on('message', (msg) => console.log(msg))
client.wsStreams.on('error', (err) => console.error(err?.message ?? err))

client.wsStreams.connect()

setTimeout(() => {
  client.wsStreams.disconnect()
  process.exit(0)
}, 15000)
