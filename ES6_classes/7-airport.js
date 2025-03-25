export default class Airport {
  constructor(name, code) {
    if (typeof name !== "string") {
      throw new TypeError("name must be a string");
    }
    this._name = name;

    if (typeof code !== "string") {
      throw new TypeError("code must be a string");
    }
    this._code = code;
  }
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  [Symbol.toStringTag] = "Airport";
  toString() {
    return this._code;
  }
}
