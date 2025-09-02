#!/usr/bin/env node

const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const databaseFile = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let response = 'This is the list of our students\n';
  try {
    const result = await countStudents(databaseFile);
    response += result;
    res.send(response);
  } catch (err) {
    res.send(`This is the list of our students\n'${err.message}`);
  }
});

app.listen(1245, () => {
  // console.log run at port 1245
});
module.exports = app;
