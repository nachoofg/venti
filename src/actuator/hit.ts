import { much } from "../fn/much";

export function hit(mapClient, mapAI) {
  let arrClient = mapClient.get("k");
  let arrAI = mapAI.get("k");
  const randomNumber = Number((Math.random() * (11 - 1) + 1).toFixed(0));
  arrClient.push(randomNumber);
  mapClient.set("k", arrClient);
  let stringAI = `El dealer tiene: ${arrAI} (${much(mapAI)})`;
  let stringClient = `Vos tenes: ${arrClient} (${much(mapClient)})`;
  console.clear();
  console.log(stringClient, "\n", stringAI);
  // console.log(mapClient.get('k'))
}
