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
        (grade) => grade.studentId === student.id
      );

      let grade;
      if (gradeObject) {
        grade = gradeObject.grade;
      } else {
        grade = 'N/A';
      }

      return { ...student, grade };
    });
}
