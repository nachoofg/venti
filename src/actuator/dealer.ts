import { much } from "../fn/much";

export function dealer(mapClient, mapAI) {
  var i: number = 0,
    arrClient: number[] = [],
    arrAI: number[] = [],
    stringAI: string = `Las cartas del dealer son estas:`,
    stringClient: string = `Tus cartas son estas:`;
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
      stringAI.concat(arrAI.toString().replace(/(?:, |^)([1-9]|10|11)(?:, |$|\b)/g, '?') + ` (?)`)
    );
  }
  return;
}

export function dealerHit(mapClient, mapAI) {
  let arrClient = mapClient.get("k");
  let arrAI = mapAI.get("k");
  const randomNumber = Number((Math.random() * (11 - 1) + 1).toFixed(0));
  arrAI.push(randomNumber);
  mapAI.set("k", arrAI);
  let stringAI = `Las cartas del dealer son estas: ${arrAI} (${much(mapAI)})`;
  let stringClient = `Tus cartas son estas: ${arrClient} (${much(mapClient)})`;
  console.clear();
  console.log(stringClient, "\n", stringAI);
  // console.log(mapClient.get('k'))
}
