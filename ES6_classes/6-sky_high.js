import Building from "./5-building";

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors)
  super(Building) {
    if (typeof sqft !== "number" && typeof floors !== "number") {
      throw new TypeError("must be a number");
    }
    this._sqft = sqft;
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== "number") {
        throw new TypeError('must be a number');
    }

    get floors() {
        return this.floors;
    }
  }

  set floors(floors) {
    if (typeof floors !== "number") {
        throw new TypeError('must be a number');
    }
    this._floors = floors;
  }
  evacuationWarningMessage() {
    throw new TypeError('Evacuate slowly the NUMBER_OF_FLOORS floors');
  }
}
