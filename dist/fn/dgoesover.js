"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dealerGoesOver = void 0;
const dealer_1 = require("../actuator/dealer");
const much_1 = require("./much");
function dealerGoesOver(mapClient, mapAI) {
    while ((0, much_1.much)(mapAI) <= 16) {
        (0, dealer_1.dealerHit)(mapClient, mapAI);
    }
    return (0, much_1.much)(mapAI) > 21;
}
exports.dealerGoesOver = dealerGoesOver;
//# sourceMappingURL=dgoesover.js.map