// const dotenv = require('dotenv');
// const path = require('path');
// const env = dotenv.config({
//     path: path.join(__dirname, '.env')
// });
module.exports = {
    rpc: {
        parent: process.env.ROOT_RPC,
        child: process.env.RAMESTTA_RPC,
    },
    pos: {
        parent: {
            erc20: '',
            // erc20: '',
            erc721: '',
            erc1155: '',
            chainManagerAddress: '', // Address of RootChainManager proxy for POS Portal
        },
        child: {
            erc721: '',
           // erc20: '',
           erc20: '',
            weth: '',
            erc1155: '',
        },
    },
    user1: {
        "privateKey": process.env.USER1_PRIVATE_KEY,
        "address": process.env.USER1_FROM
    },
    user2: {
        address: process.env.USER2_FROM, // Your address
        "privateKey": process.env.USER2_PRIVATE_KEY
    },
}
