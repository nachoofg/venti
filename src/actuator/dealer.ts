import { much } from "../fn/much";

export function dealer(mapClient, mapAI) {
  var i: number = 0,
    arrClient: number[] = [],
    arrAI: number[] = [],
    stringAI: string = `El dealer tiene:`,
    stringClient: string = `Vos tenes:`;
  for (let i = 0; i < 3; i++) {
    if (arrClient.length === 0 && arrAI.length === 0) {
      arrClient.push(Number((Math.random() * (11 - 1) + 1).toFixed(0)));
    } else if (arrClient.length > 0 && arrAI.length === 0) {
      arrAI.push(Number((Math.random() * (11 - 1) + 1).toFixed(0)));
    } else if (arrClient.length > 0 && arrAI.length > 0) {
      arrClient.push(Number((Math.random() * (11 - 1) + 1).toFixed(0)));
      arrAI.push(Number((Math.random() * (11 - 1) + 1).toFixed(0)));
    } else {
      arrAI.push(Number((Math.random() * (11 - 1) + 1).toFixed(0)));
    }
    console.clear();
    mapClient.set("k", arrClient);
    mapAI.set("k", arrAI);
    console.log(
      stringClient.concat(arrClient.toString() + ` (${much(mapClient)})`),
      "\n",
      stringAI.concat(arrAI.toString() + ` (${much(mapAI)})`)
    );
  }
  return;
}
