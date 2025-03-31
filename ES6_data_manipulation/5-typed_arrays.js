export default function createInt8TypedArray(length, position, value) {
  if (
    typeof length !== "number" ||
    typeof position !== "number" ||
    typeof value !== "number"
  ) {
    throw new Error("All arguments must be numbers");
  }

  const buffer = new ArrayBuffer(length);
  const Int8 = new DataView(buffer);

  if (position < 0 || position >= length) {
    throw new Error("Position outside range");
  }

  view.setInt8(position, value);

  return Int8;
}
