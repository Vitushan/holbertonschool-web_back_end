import default class HolbertonClass {
    constructor(size, location) {
        if (typeof size !== 'number') {
            throw new TypeError('size must a number');
        }
        this._size = size;
    
        if (typeof location !== 'string') {
            throw new TypeError('location must be a string');
        }
        this._location = location;
    }

    valueOf () {
        this._size = size;
    }

    toString() {
        return `[object ${this._location}]`
    }
}
