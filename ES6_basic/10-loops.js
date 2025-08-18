export default function appendToEachArrayValue(array, appendString) {
// eslint-disable-next-line no-param-reassign
  for (const [i, value] of array.entries()) {
    array[i] = appendString + value;
  }
  return array;
}
