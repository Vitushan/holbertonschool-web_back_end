export default function createInt8TypedArray(length, position, value) {
  if (
    typeof length !== "number" ||
    typeof position !== "number" ||
    typeof value !== "number"
  ) {
    throw new Error("All arguments must be numbers");
  }

  const buffer = new ArrayBuffer(8);
  const view = new Int8Array(buffer);
}
return buffer;
