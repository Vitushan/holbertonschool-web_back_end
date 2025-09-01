#!/usr/bin/env node

const http = require('node:http');
const countStudents = require('./3-read_file_async');

const databaseFile = process.argv[2];

const app = http.createServer((request, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    countStudents(databaseFile)
      .then(() => {
        res.end();
      })
      .catch((err) => {
        res.write(err.message);
        res.end();
      });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);
module.exports = app;
