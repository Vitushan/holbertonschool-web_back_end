export default function appendToEachArrayValue(array, appendString) {
  for (const [i, value] of array.entries()) {
    Array[i] = appendString + value;
  }
  return array;
}
