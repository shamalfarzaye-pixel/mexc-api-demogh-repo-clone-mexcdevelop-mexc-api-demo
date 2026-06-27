const axios = require('axios')
const { Console } = require('console')

const removeEmptyValue = obj => {
  if (!(obj instanceof Object)) return {}
  Object.keys(obj).forEach(key => isEmptyValue(obj[key]) && delete obj[key])
  return obj
}

const isEmptyValue = input => {
  return (!input && input !== false && input !== 0) ||
    ((typeof input === 'string' || input instanceof String) && /^\s+$/.test(input)) ||
    (input instanceof Object && !Object.keys(input).length) ||
    (Array.isArray(input) && !input.length)
}

const stringifyKeyValuePair = ([key, value]) => {
  const valueString = typeof value === 'object' ? JSON.stringify(value) : value
  return `${key}=${encodeURIComponent(valueString)}`
}

const buildQueryString = params => {
  if (!params) return ''
  return Object.entries(params)
    .map(stringifyKeyValuePair)
    .join('&')
}

const getRequestInstance = (config) => axios.create({ ...config })

const createRequest = (config) => {
  const { baseURL, apiKey, method, url, headers, data } = config
  return getRequestInstance({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'X-MEXC-APIKEY': apiKey,
      ...headers
    }
  }).request({
    method,
    url,
    data
  })
}

const flowRight = (...functions) => input => functions.reduceRight(
  (value, fn) => fn(value),
  input
)

const defaultLogger = new Console({
  stdout: process.stdout,
  stderr: process.stderr
})

module.exports = {
  isEmptyValue,
  removeEmptyValue,
  buildQueryString,
  createRequest,
  flowRight,
  defaultLogger
}
