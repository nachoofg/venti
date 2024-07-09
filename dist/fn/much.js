"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.much = void 0;
function much(map1) {
    let arr = map1.get("k"), t = 0;
    arr.forEach((val) => {
        return (t += Number(val));
    });
    return Number(t);
}
exports.much = much;
//# sourceMappingURL=much.js.map