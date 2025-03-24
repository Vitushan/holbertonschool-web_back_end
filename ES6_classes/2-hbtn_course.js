export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        if (typeof length !== 'number') {
            throw new TypeError('Length must be a number');
        }
        if  (typeof students !== 'string') {
            throw new TypeError('students must be a strings');
        }
        this._name = name;
        this._length = length;
        this._students = students; 
    }
}

get name() {
    return this._name;
}

set name(name) {
    if (typeof name !== 'string') {
        throw new TypeError('Name must be a qtring');
    }
    this._name = name;
}

get lenght() {
    return this._length;
}

set length(length) {
    if (typeof length !== 'number') {
        throw new TypeError('Length must be a number');
    }
    this._length = length;
}

get students() {
    return this._students;
}

set Students(students) {
    if (typeof students !== 'string') {
        throw new TypeError('Students must be a string');
    }
    this._students = students;
}