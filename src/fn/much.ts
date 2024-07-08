export function much(map1) {
  let arr: string[] = map1.get("k"),
    t: number = 0;
  /* console.log(arr) */
  arr.forEach((val) => {
    /* console.log(val) */
    return (t += Number(val));
  });
  return Number(t);
}
