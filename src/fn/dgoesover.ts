import { dealerHit } from "../actuator/dealer";
import { much } from "./much";

export function dealerGoesOver(mapClient, mapAI) {
  while (much(mapAI) <= 16) {
    dealerHit(mapClient, mapAI);
  }
  return much(mapAI) > 21;
}
