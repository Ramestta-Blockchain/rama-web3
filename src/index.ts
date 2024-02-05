import { IPlugin } from "@ramestta/ramajs";
import Web3 from "web3";
import { RamaBigNumber } from "./utils";
import { Web3Client } from "./web3";

export class Web3ClientPlugin implements IPlugin {
    setup(rama) {
        rama.utils.Web3Client = Web3Client;
        rama.utils.BN = RamaBigNumber;
        rama.utils.isBN = (value) => {
            return Web3.utils.isBN(value);
        };
    }
}

export * from "./utils";

/* tslint:disable-next-line */
export default Web3ClientPlugin;
