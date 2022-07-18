import { Tx } from "./tx.ts";
import { Validator } from "./validator.ts";

export type Block = {
    //num of block
    index: number;
    //time of creation of block
    time: string;
    //pre-block hash
    prev_hash: string;
    //block hash
    hash: string;
    //transaction(box of data)
    tx: Tx;
    //ensurance of transaction
    validator: Validator;
};