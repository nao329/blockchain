import { Validator } from "../validator.ts";

export function pickWinner(): Validator {
    //sakamoto
    const v1: Validator = {
        address: "SakamotoWallet",
        signature: "I'll check exactlly!",
        token: 1,
    }
    //sato
    const v2: Validator = {
        address: "SatoWallet",
        signature: "I'll check exactlly!",
        token: 2,
    }
    //suzuki
    const v3: Validator = {
        address: "SuzukiWallet",
        signature: "I'll check exactlly!",
        token: 3,
    }
    //abe
    const v4: Validator = {
        address: "AbeWallet",
        signature: "I'll check exactlly!",
        token: 4,
    };

    const candidates = [v1,v2,v2,v3,v3,v3,v4,v4,v4,v4];

    const randomIndex = Math.floor(Math.random() * candidates.length)
    const winner = candidates[randomIndex];

    console.log('${winner.address} was picked as a validator!');
    return winner;
}