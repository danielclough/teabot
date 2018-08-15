'use strict';

const fs = require('fs');
const csv = require('csv');

const TeaBot = require('../lib/teabot');

async function doImport (file) {
  if (!fs.existsSync(file)) return console.error(`File does not exist: ${file}`);

  let parser = csv.parse({
    columns: true
  }, function (err, data) {
    if (err) console.error(err);
    console.log(data);
  });

  fs.createReadStream(file).pipe(parser);
}

// TODO: allow use of command line parameters to specify file
// i.e., process.argv
doImport('./tools/tea.csv');
