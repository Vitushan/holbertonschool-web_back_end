export default function createInt8TypedArray(length, position, value) {
  if (
    typeof length !== 'number' ||
    typeof position !== 'number' ||
    typeof value !== 'number'
  ) {
    throw new Error('All arguments must be numbers');
  }

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  Int8Array[position] = value;

  return int8Array;
}
