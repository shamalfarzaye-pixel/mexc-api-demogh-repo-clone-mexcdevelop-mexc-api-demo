const { createClient } = require('../../../common/src')
const { P2P: P2PModule } = require('./rest')

module.exports = createClient(P2PModule)
