#!/usr/bin/env node

const fs = require('fs').promises;

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    lines.shift();

    const fields = {};

    for (const line of lines) {
      const parts = line.split(',');
      if (parts.length >= 4);

      const firstName = parts[0].trim();
      const field = parts[3].trim();

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    }

    return fields;
  } catch (err) {
    throw new Error('the file is not accessible');
  }
}

module.exports = readDatabase;
