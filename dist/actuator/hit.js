"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hit = void 0;
const much_1 = require("../fn/much");
function hit(mapClient, mapAI) {
    let arrClient = mapClient.get("k");
    let arrAI = mapAI.get("k");
    const randomNumber = Number((Math.random() * (11 - 1) + 1).toFixed(0));
    arrClient.push(randomNumber);
    mapClient.set("k", arrClient);
    let stringAI = `Las cartas del dealer son estas: ${arrAI.toString().replace(/(?:, |^)([1-9]|10|11)(?:, |$|\b)/g, '?')} (?)`;
    let stringClient = `Tus cartas son estas: ${arrClient} (${(0, much_1.much)(mapClient)})`;
    console.clear();
    console.log(stringClient, "\n", stringAI);
}
exports.hit = hit;
//# sourceMappingURL=hit.js.map