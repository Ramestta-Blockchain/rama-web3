const { use, POSClient } = require("@ramestta/ramajs");
const { Web3ClientPlugin } = require("@ramestta/rama-web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const dotenv = require('dotenv');
const path = require('path');
const env = dotenv.config({
    path: path.join(__dirname, '.env')
});

const { user1, rpc, pos } = require("./config");

use(Web3ClientPlugin);

const from = user1.address;
const privateKey = user1.privateKey;

const execute = async () => {

    const rama = new POSClient();
    await rama.init({
        // log: true,
        network: 'testnet',
        version: 'v1',
        parent: {
            provider: new HDWalletProvider(privateKey, rpc.root),
            defaultConfig: {
                from
            }
        },
        child: {
            provider: new HDWalletProvider(privateKey, rpc.child),
            defaultConfig: {
                from
            }
        }
    });

    const rootTokenErc20 = rama.erc20(pos.parent.erc20, true);

    const balanceRoot = await rootTokenErc20.getBalance(from)
    console.log('balanceRoot', balanceRoot);
}

execute().then(_ => {
    process.exit(0)
}).catch(err => {
    console.error("error", err);
    process.exit(0);
})
