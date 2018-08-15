'use strict';

const fs = require('fs');
const csv = require('csv');

const TeaBot = require('../lib/teabot');

async function doImport (file) {
  if (!fs.existsSync(file)) return console.error(`File does not exist: ${file}`);

  let bot = new TeaBot();
  let parser = csv.parse({
    columns: true
  }, function (err, teas) {
    if (err) console.error(err);

    // TODO: use Fabric's logs rather than console
    console.log(`CSV parsed, has ${teas.length} entries.  Beginning import...`);

    for (let i = 0; i < teas.length; i++) {
      let result = bot.app.resources.Tea.create(teas[i], function (err, obj) {
        console.log(`Callback: ${err} ${obj}`);
      });
      console.log(`Import: ${result}`, teas[i]);
    }

    console.log(`CSV import finished!`);
  });

  fs.createReadStream(file).pipe(parser);
}

// TODO: allow use of command line parameters to specify file
// i.e., process.argv
doImport('./tools/tea.csv');
