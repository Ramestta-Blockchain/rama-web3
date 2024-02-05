if (process.env.NODE_ENV === 'production') {
    module.exports = require('./rama-web3.node.min.js')
} else {
    module.exports = require('./rama-web3.node.js')
}
