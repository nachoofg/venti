import { much } from "./much";
export function goesOver(map1) {
  if (much(map1) > 21) return true;
  else return false;
}
