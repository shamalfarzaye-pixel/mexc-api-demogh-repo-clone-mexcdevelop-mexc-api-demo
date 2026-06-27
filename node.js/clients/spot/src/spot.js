const { createClient } = require('../../../common/src')
const { Spot: SpotModule } = require('./rest')

module.exports = createClient(SpotModule)
