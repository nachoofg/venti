import inquirer from "inquirer";
import { dealer } from "./actuator/dealer";
import { hit } from "./actuator/hit";
import obj1 from "./json/1.json";
import obj2 from "./json/2.json";
import { goesOver } from "./fn/goesover";

let arrClient = new Map(),
  arrAI = new Map();
console.clear();
inquirer
//@ts-ignore
  .prompt(obj1)
  .then(async (ans) => {
    switch (ans.option) {
      case 1:
        dealer(arrClient, arrAI);
        while (goesOver(arrClient) != true) {
          //@ts-ignore
          await inquirer.prompt(obj2).then(async (ans2) => {
            switch (ans2.option) {
              case 1:
                break;
              case 2:
                hit(arrClient, arrAI);
              default:
                break;
            }
          });
        }
        return console.log("te re pasaste boludo");
      default:
        return;
    }
  })
  .catch((err) => {
    return console.log(err);
  });
