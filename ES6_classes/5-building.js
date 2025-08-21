export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    console.log(this._sqft);
    throw new TypeError('Class extending Building must override evacuationWarningMessage');
  }
}
