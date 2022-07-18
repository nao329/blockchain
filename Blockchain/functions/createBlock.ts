import { Block } from "./blockchain/block.ts";
import { Tx } from "./blockchain/tx.ts";
import { Validator } from "/blockchain./validator.ts";
import { calcBlockHash } from "./calcBlockHash.ts";

//hash
export async function createBlock(
    prevBlock: Block,
    tx: Tx,
    validator: Validator,
): Promise<Block> {
    //now_time
    const time = new Date().toISOString();
    //index
    const index = prevBlock.index + 1;
    //hash
    const hash = await calcBlockHash(
        index,
        time,
        prevBlock.hash,
        tx,
        validator,
);
//new_block
const newBlock: Block = {
    index: index,
    time: time,
    prev_hash: prevBlock.hash,
    hash: hash,
    tx: tx,
    validator: validator,
};
return newBlock;
}