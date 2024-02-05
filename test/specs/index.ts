import { use } from "@ramestta/ramajs";
import { Web3ClientPlugin } from "@ramestta/rama-web3";

use(Web3ClientPlugin);

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

import './pos_bridge'
import './hex.spec'
import './erc20.spec'
