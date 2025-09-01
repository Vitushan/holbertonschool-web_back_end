#!/usr/bin/env node

const express = require('express');
const countStudents = require('/3-read_file_async');

const databaseFile = process.argv[2];
const app = express();
