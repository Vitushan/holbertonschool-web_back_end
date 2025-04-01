export default function createInt8TypedArray(length, position, value) {
  if (
    typeof length !== 'number' ||
    typeof position !== 'number' ||
    typeof value !== 'number'
  ) {
    throw new TypeError('All arguments must be numbers');
  }

  if (position < 0 || position >= length) {
    throw new TypeError('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);

  return view;
}
