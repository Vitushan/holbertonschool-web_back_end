export default function getStudentsByLocation(getListStudentIds) {
    if (!Array.isArray(getListStudentIds)) {
        return [];
    }
    return getListStudentIds.map((student) => student.location);
}