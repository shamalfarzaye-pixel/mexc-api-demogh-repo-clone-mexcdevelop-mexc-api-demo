const path = require('path')

try {
  require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
} catch {
  // dotenv is optional until `npm install` is run in node.js/
}

const { MexcFutures } = require(path.resolve(__dirname, '../src'))

function createPublicClient () {
  return new MexcFutures()
}

function createPrivateClient () {
  return new MexcFutures(
    process.env.MEXC_API_KEY || '',
    process.env.MEXC_API_SECRET || ''
  )
}

function printResponse (response) {
  console.log(response?.data ?? response)
}

function printError (error) {
  console.error(error?.response?.data ?? error?.message ?? error)
}

module.exports = {
  MexcFutures,
  createPublicClient,
  createPrivateClient,
  printResponse,
  printError
}
