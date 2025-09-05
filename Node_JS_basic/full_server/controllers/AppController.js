#!/usr/bin/env node

class Appcontroller {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}
module.exports = Appcontroller;
