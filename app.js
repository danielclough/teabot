'use strict';

const TeaBot = require('./lib/teabot');

async function main () {
  let bot = new TeaBot();
  await bot.start();
}

main();
