export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name !== 'string') {
            throw new TypeError('age must be a string');
        }
        if (typeof length !== 'number') {
            throw new TypeError('age must be a number');
        }
    }
}
