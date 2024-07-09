import { much } from "../fn/much";

export function hit(mapClient, mapAI) {
  let arrClient = mapClient.get("k");
  let arrAI = mapAI.get("k");
  const randomNumber = Number((Math.random() * (11 - 1) + 1).toFixed(0));
  arrClient.push(randomNumber);
  mapClient.set("k", arrClient);
  let stringAI = `Las cartas del dealer son estas: ${arrAI.toString().replace(/(?:, |^)([1-9]|10|11)(?:, |$|\b)/g, '?')} (?)`;
  let stringClient = `Tus cartas son estas: ${arrClient} (${much(mapClient)})`;
  console.clear();
  console.log(stringClient, "\n", stringAI);
  // console.log(mapClient.get('k'))
}
