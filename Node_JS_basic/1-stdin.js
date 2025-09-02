#!/usr/bin/env node

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.resume();

let inputReceived = false;

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
    inputReceived = true;
  }
});

process.stdin.on('end', () => {
  if (inputReceived) {
    process.stdout.write('This important software is now closing\n');
  }
});
