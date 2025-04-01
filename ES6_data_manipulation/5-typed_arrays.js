export default function createInt8TypedArray(length, position, value) {
  if (
    typeof length !== "number" ||
    typeof position !== "number" ||
    typeof value !== "number"
  ) {
    throw new Error("All arguments must be numbers");
  }

  if (position < 0 || position >= length) {
    throw new Error("Position outside range");
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  DataView.setInt8(position, value);

  return DataView;
}
