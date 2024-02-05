import { ITransactionData } from "@ramestta/ramajs";
import { Transaction } from "web3/eth/types";

export const web3TxToRamaTx = (tx: Transaction) => {
    const ramaTx: ITransactionData = tx as any;
    ramaTx.transactionHash = tx.hash;
    return ramaTx;
};
