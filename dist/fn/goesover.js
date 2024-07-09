"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goesOver = void 0;
const much_1 = require("./much");
function goesOver(map1) {
    if ((0, much_1.much)(map1) > 21)
        return true;
    else
        return false;
}
exports.goesOver = goesOver;
//# sourceMappingURL=goesover.js.map