/**
 * Normalize constructor arguments for connector clients.
 * Supports: new Client({ apiKey, apiSecret, ...options })
 */
function normalizeOptions (apiKey, apiSecret, options) {
  if (apiKey && typeof apiKey === 'object' && apiSecret === '') {
    return { ...apiKey }
  }
  return { apiKey: apiKey || '', apiSecret: apiSecret || '', ...options }
}

module.exports = { normalizeOptions }
