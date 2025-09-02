const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const header = lines.shift();

    const studentsByField = {};
    let totalStudents = 0;

    for (const line of lines) {
      const fields = line.split(',');
      if (fields.length < 4) continue;
      const firstname = fields[0].trim();
      const field = fields[3].trim();

      if (!studentsByField[field]) studentsByField[field] = [];
      studentsByField[field].push(firstname);

      totalStudents += 1;
    }

    console.log(`Number of students: ${totalStudents}`);
    let output = '';
    for (const [field, names] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    return output.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
