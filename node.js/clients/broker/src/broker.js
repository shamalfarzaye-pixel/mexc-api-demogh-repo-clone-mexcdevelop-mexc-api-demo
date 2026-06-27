const { createClient } = require('../../../common/src')
const { Broker: BrokerModule } = require('./rest')

module.exports = createClient(BrokerModule)
