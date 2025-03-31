export default function hasValuesFromArray(set, array) {
    return array.every((arrays) => set.has(arrays));
}