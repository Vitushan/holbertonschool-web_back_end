export default function createInt8TypedArray(length, position, value) {
    if (typeof length !== 'number' || typeof position ==! 'number' || typeof value !== 'number') {
        throw new TypeError('Position outside range');
    } 
    

}