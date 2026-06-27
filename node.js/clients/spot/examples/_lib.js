const path = require('path')

try {
  require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
} catch {
  // dotenv is optional until `npm install` is run in node.js/
}

const { MexcSpot } = require(path.resolve(__dirname, '../src'))

const DEFAULT_BASE_URL = process.env.MEXC_BASE_URL || 'https://api.mexc.com'

function createPublicClient () {
  return new MexcSpot({ baseURL: DEFAULT_BASE_URL })
}

function createPrivateClient () {
  return new MexcSpot(
    process.env.MEXC_API_KEY || '',
    process.env.MEXC_API_SECRET || '',
    { baseURL: DEFAULT_BASE_URL }
  )
}

function printResponse (response) {
  console.log(response?.data ?? response)
}

function printError (error) {
  console.error(error?.response?.data ?? error?.message ?? error)
}

module.exports = {
  MexcSpot,
  createPublicClient,
  createPrivateClient,
  printResponse,
  printError
}
