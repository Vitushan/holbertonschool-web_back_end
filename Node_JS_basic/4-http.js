#!/usr/bin/env node

const http = require('node:http');

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});

app.listen(12345, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
