export function getUniques(arr: Array<any>) {
  return arr.filter((val, index, tempArr) => {
    return tempArr.indexOf(val) == index;
  });
}
