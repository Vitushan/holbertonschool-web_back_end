#!/usr/bin/env node

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf-8');

let inputReceived = false;

process.stdin.on('data', (data) => {
  if (inputReceived) return;
  inputReceived = true;

  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);

  if (process.stdin.isTTY === false) {
    process.stdout.write('This important software is now closing\n');
  }
});

process.stdin.on('end', () => {
  if (process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
  }
});
