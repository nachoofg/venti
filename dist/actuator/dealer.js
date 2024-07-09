"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealerHit = exports.dealer = void 0;
const much_1 = require("../fn/much");
function dealer(mapClient, mapAI) {
    var i = 0, arrClient = [], arrAI = [], stringAI = `Las cartas del dealer son estas:`, stringClient = `Tus cartas son estas:`;
    for (let i = 0; i < 3; i++) {
        if (arrClient.length === 0 && arrAI.length === 0) {
            arrClient.push(Number((Math.random() * (11 - 1) + 1).toFixed(0)));
        }
        else if (arrClient.length > 0 && arrAI.length === 0) {
            arrAI.push(Number((Math.random() * (11 - 1) + 1).toFixed(0)));
        }
        else if (arrClient.length > 0 && arrAI.length > 0) {
            arrClient.push(Number((Math.random() * (11 - 1) + 1).toFixed(0)));
            arrAI.push(Number((Math.random() * (11 - 1) + 1).toFixed(0)));
        }
        else {
            arrAI.push(Number((Math.random() * (11 - 1) + 1).toFixed(0)));
        }
        console.clear();
        mapClient.set("k", arrClient);
        mapAI.set("k", arrAI);
        console.log(stringClient.concat(arrClient.toString() + ` (${(0, much_1.much)(mapClient)})`), "\n", stringAI.concat(arrAI.toString().replace(/(?:, |^)([1-9]|10|11)(?:, |$|\b)/g, '?') + ` (?)`));
    }
    return;
}
exports.dealer = dealer;
function dealerHit(mapClient, mapAI) {
    let arrClient = mapClient.get("k");
    let arrAI = mapAI.get("k");
    const randomNumber = Number((Math.random() * (11 - 1) + 1).toFixed(0));
    arrAI.push(randomNumber);
    mapAI.set("k", arrAI);
    let stringAI = `Las cartas del dealer son estas: ${arrAI} (${(0, much_1.much)(mapAI)})`;
    let stringClient = `Tus cartas son estas: ${arrClient} (${(0, much_1.much)(mapClient)})`;
    console.clear();
    console.log(stringClient, "\n", stringAI);
}
exports.dealerHit = dealerHit;
//# sourceMappingURL=dealer.js.map