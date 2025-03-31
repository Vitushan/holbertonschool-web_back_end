import getListStudents from "./0-get_list_students"

export default function getListStudentsIds(students) {
    if (!Array.isArray(students)) {
        return [];
    }
    return students.map(student => student.id);
}
