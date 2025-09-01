#!/usr/bin/env node

const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        console.log('Number of students: 0');
        return;
      }

      const students = lines.slice(1)
        .map((line) => line.split(','))
        .filter((student) => student.length >= 4);

      console.log(`Number of students: ${students.length}`);

      const fields = {};
      students.forEach((student) => {
        const firstName = student[0].trim();
        const field = student[3].trim();
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      });

      for (const field in fields) {
        if (Object.hasOwn(fields, field)) {
          console.log(
            `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
          );
        }
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
