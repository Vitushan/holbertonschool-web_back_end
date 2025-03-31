export default function updateStudentGradeByCity(students, location, newGrades) {
    if (!Array.isArray(students)) {
        return [];
    }

    const filteredStudents = students.filter(student => student.location === location);
}