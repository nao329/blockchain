import { Input } from "./input.ts";
import { Output } from "./output.ts";

//transaction
export type Tx = {
    //ID
    id: string;
    //payment
    inputs: Input[];
    //withdraw
    outputs: Output[];
};