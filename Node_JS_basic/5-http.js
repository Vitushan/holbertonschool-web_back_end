#!/usr/bin/env node

const http = require('http');
const fs = require('fs');

function countStudents(database) {
  return new Promise((resolve, reject) => {
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length === 0) {
        resolve('Number of students: 0');
        return;
      }

      const fields = {};
      let studentsNumber = 0;

      lines.forEach((line, idx) => {
        if (idx === 0) return;
        const parts = line.split(',');
        if (parts.length < 4) return;
        const name = parts[0].trim();
        const field = parts[3].trim();

        if (!name || !field) return;
        studentsNumber += 1;
        if (!fields[field]) fields[field] = [];
        fields[field].push(name);
      });

      let output = `Number of students: ${studentsNumber}\n`;
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
      }
      resolve(output.trim());
    });
  });
}

const database = process.argv[2];

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    let resMessage = 'This is the list of our students\n';
    try {
      const studentsInfo = await countStudents(database);
      resMessage += studentsInfo;
    } catch (err) {
      resMessage += err;
    }
    res.end(resMessage);
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
