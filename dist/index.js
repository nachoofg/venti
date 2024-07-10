"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const dealer_1 = require("./actuator/dealer");
const hit_1 = require("./actuator/hit");
const _1_json_1 = __importDefault(require("./json/1.json"));
const _2_json_1 = __importDefault(require("./json/2.json"));
const goesover_1 = require("./fn/goesover");
const dgoesover_1 = require("./fn/dgoesover");
const much_1 = require("./fn/much");
const colors_1 = require("colors");
const sleep_1 = require("./fn/sleep");
let arrClient = new Map(), arrAI = new Map(), cond2 = false;
console.clear();
inquirer_1.default
    .prompt(_1_json_1.default)
    .then(async (ans) => {
    switch (ans.option) {
        case 1:
            (0, dealer_1.dealer)(arrClient, arrAI);
            while ((0, goesover_1.goesOver)(arrClient) != true && cond2 === false) {
                await inquirer_1.default.prompt(_2_json_1.default).then(async (ans2) => {
                    switch (ans2.option) {
                        case 1:
                            if ((0, dgoesover_1.dealerGoesOver)(arrClient, arrAI)) {
                                console.log((0, colors_1.green)("El dealer se pasó! has ganado."));
                                (0, sleep_1.sleep)("Presiona cualquier tecla para finalizar...");
                                return (cond2 = true);
                            }
                            else if ((0, much_1.much)(arrAI) > (0, much_1.much)(arrClient)) {
                                console.log((0, colors_1.red)("El dealer sacó más que vos, perdiste!"));
                                (0, sleep_1.sleep)("Presiona cualquier tecla para finalizar...");
                                return (cond2 = true);
                            }
                            else if ((0, much_1.much)(arrClient) > (0, much_1.much)(arrAI)) {
                                console.log((0, colors_1.green)("El dealer tiene menos que vos, ganaste!"));
                                (0, sleep_1.sleep)("Presiona cualquier tecla para finalizar...");
                                return (cond2 = true);
                            }
                            else if ((0, much_1.much)(arrClient) === (0, much_1.much)(arrAI)) {
                                console.log((0, colors_1.yellow)("Fue un empate."));
                                return (cond2 = true);
                            }
                            else
                                return console.log((0, colors_1.red)("No se que paso la verdad :v"));
                            break;
                        case 2:
                            (0, hit_1.hit)(arrClient, arrAI);
                            if ((0, much_1.much)(arrClient) === 21) {
                                console.log((0, colors_1.green)("Que suertudo! sacaste 21."));
                                return (cond2 = true);
                            }
                        default:
                            break;
                    }
                });
            }
            if ((0, goesover_1.goesOver)(arrClient))
                return console.log((0, colors_1.red)("Te pasaste."));
        case 2:
            process.exit(0);
            return;
        case 3:
            console.log("Hecho por nachoofg (https://github.com/nachoofg) en Typescript, compilado por pkg en todos sus formatos disponibles.");
            return (0, sleep_1.sleep)("Presiona cualquier tecla para finalizar...");
    }
})
    .catch((err) => {
    return console.log(err);
});
//# sourceMappingURL=index.js.map