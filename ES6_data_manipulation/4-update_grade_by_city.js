export default function updateStudentGradeByCity(
  students,
  location,
  newGrades
) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students
    .filter((student) => student.location === location)
    .map((student) => {
      const gradeObject = newGrades.find(
        (grade) => (grade) => grade.studentId === student.id
      );
      const grade = gradeObject ? gradeObject.grade : "N/A";
      return { ...student, grade };
    });
}
