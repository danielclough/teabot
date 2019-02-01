'use strict';


const config = require('./config');

const Doorman = require('doorman');
const Fabric = require('@fabric/core');

async function main () {
  let doorman = new Doorman(config);
  let fabric = new Fabric(config);

  await fabric.start();
  await doorman.start();

  console.log('doorman:', doorman);
  console.log('fabric:', fabric);
}


main();
