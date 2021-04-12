export function setWidth(value: number) {
  let num = window.innerWidth / value;
  return returnEvenNumber(Math.floor(window.innerWidth / num)) + "px";
}
export function setHeight(value: number) {
  let num = window.innerHeight / value;
  return returnEvenNumber(Math.floor(window.innerHeight / num)) + "px";
}

export function returnEvenNumber(value: number) {
  if (value % 2 === 1) return value + 1;
  return value;
}
