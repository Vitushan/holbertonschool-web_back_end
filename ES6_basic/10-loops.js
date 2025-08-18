export default function appendToEachArrayValue(array, appendString) {
  for (const [i, value] of array.entries()) {
    value[i] = appendString + value;
  }
  return array;
}
