export default function updateStudentGradeByCity(
  students,
  location,
  newGrades
) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map((student) => {
    if (student.location === location) {
      const gradeObject = newGrades.find(
        (grade) => grade.studentId === student.id
      );
      const updatedStudent = { ...student };

      if (gradeObject) {
        updatedStudent.grade = gradeObject.grade;
      } else {
        updatedStudent.grade = 'N/A';
      }

      return updatedStudent;
    }

    return student;
  });
}
