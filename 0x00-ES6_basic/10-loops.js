export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const arrCopy = array;
  for (const value of array) {
    arrCopy[i] = appendString + value;
    i += 1;
  }

  return arrCopy;
}
