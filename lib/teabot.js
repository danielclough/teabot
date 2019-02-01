'use strict';

const Maki = require('maki');

// Application Resource Contracts (ARCs)
const Tea = require('../resources/tea');
const Person = require('../resources/person');

/**
 * Basic implementation of a Tea-selling bot.
 * @constructor
 */
function TeaBot () {
  this.app = new Maki({
    service: {
      name: 'teabot'
    }
  });

  this.app.define('Tea', Tea);
  this.app.define('Person', Person);
}

TeaBot.prototype.start = async function () {
  return this.app.start();
};

module.exports = TeaBot;
