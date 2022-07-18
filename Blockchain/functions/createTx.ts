import { Input } from "../input.ts";
import { Output } from "../output.ts";
import { Tx } from "../tx.ts";

export function createTx(): Tx {
    const txId = crypto.randomUUID();
    const now = new Date().toISOString();
    const inputs: Input[] = [
        {
            time: now,
            from:"HanakoWallet",
            signature: "Hey! What' up? I'll send Tro some coins."
        },
    ];
    const outputs: Output[] = [
        {
            to:"TaroWallt",
            ammount: 20,
            fee: 3,
        },
    ];
    const tx: Tx = {
        id:txId,
        inputs: inputs,
        outputs: outputs,
    };
    return tx;
}