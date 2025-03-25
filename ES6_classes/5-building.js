import class Building {
    constructor(sqft, number) {
        if (typeof vsqft !== 'number')
            throw new TypeError('sqft must be a numbers');
    }
    this._sqft = sqft;

}

get sqft() {
    return this._sqft;
}
get


