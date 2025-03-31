export default function createInt8TypedArray(length, position, value) {
  if (
    typeof length !== "number" ||
    typeof position !== "number" ||
    typeof value !== "number"
  ) {
    throw new Error("All arguments must be numbers");
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  if (position || length >= 0) {
    RangeError("Position outside range");
  }

  return;
}
