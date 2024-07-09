import inquirer from "inquirer";
import { dealer } from "./actuator/dealer";
import { hit } from "./actuator/hit";
import obj1 from "./json/1.json";
import obj2 from "./json/2.json";
import { goesOver } from "./fn/goesover";
import { dealerGoesOver } from "./fn/dgoesover";
import { much } from "./fn/much";
import { green, red, yellow } from "colors";

let arrClient = new Map(),
  arrAI = new Map(),
  cond2 = false;
console.clear();
inquirer
  //@ts-ignore
  .prompt(obj1)
  .then(async (ans) => {
    switch (ans.option) {
      case 1:
        dealer(arrClient, arrAI);
        while (goesOver(arrClient) != true && cond2 === false) {
          //@ts-ignore
          await inquirer.prompt(obj2).then(async (ans2) => {
            switch (ans2.option) {
              case 1:
                if (dealerGoesOver(arrClient, arrAI)) {
                  console.log(green("El dealer se pasó! has ganado."));
                  return (cond2 = true);
                } else if (much(arrAI) > much(arrClient)) {
                  console.log(red("El dealer sacó más que vos, perdiste!"));
                  return (cond2 = true);
                } else if (much(arrClient) > much(arrAI)) {
                  console.log(green("El dealer tiene menos que vos, ganaste!"));
                  return (cond2 = true);
                } else if (much(arrClient) === much(arrAI)) {
                  console.log(yellow("Fue un empate."));
                  return (cond2 = true);
                } else return console.log(red("No se que paso la verdad :v"));
                break;
              case 2:
                hit(arrClient, arrAI);
                if (much(arrClient) === 21) {
                  console.log(green("Que suertudo! sacaste 21."));
                  return (cond2 = true);
                }

              default:
                break;
            }
          });
        }
        if (goesOver(arrClient)) return console.log(red("Te pasaste."));
      case 2:
        process.exit(0)
        return;
        case 3:
          return console.log("Hecho por nachoofg https://github.com/nachoofg")
    }
  })
  .catch((err) => {
    return console.log(err);
  });
