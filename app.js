'use strict';

var Maki = require('maki');
var app = new Maki({
  service: {
    name: 'teabot'
  }
});

app.define('Tea', require('./resources/tea'));
app.define('People', require('./resources/people'));

module.exports = app.start();
