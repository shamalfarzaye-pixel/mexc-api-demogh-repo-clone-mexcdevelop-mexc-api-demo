const APIBase = require('./APIbase')
const { flowRight } = require('../helpers/utils')

function normalizeConstructorArgs (apiKey, apiSecret, options) {
  if (apiKey && typeof apiKey === 'object' && apiSecret === '' && (!options || Object.keys(options).length === 0)) {
    const opts = { ...apiKey }
    return {
      apiKey: opts.apiKey || '',
      apiSecret: opts.apiSecret || '',
      options: opts
    }
  }
  return { apiKey, apiSecret, options: options || {} }
}

function createClient (Mixin, defaultOptions = {}) {
  return class extends flowRight(Mixin)(APIBase) {
    constructor (apiKey = '', apiSecret = '', options = {}) {
      const normalized = normalizeConstructorArgs(apiKey, apiSecret, options)
      options = {
        baseURL: defaultOptions.baseURL || 'https://api.mexc.com',
        ...normalized.options
      }
      super({
        apiKey: normalized.apiKey,
        apiSecret: normalized.apiSecret,
        ...options
      })
    }
  }
}

module.exports = createClient
