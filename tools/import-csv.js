'use strict';

const fs = require('fs');
const csv = require('csv');

const Remote = require('maki-remote');

async function doImport (file) {
  if (!fs.existsSync(file)) return console.error(`File does not exist: ${file}`);

  let remote = new Remote('http://localhost:9200/teas');
  let parser = csv.parse({
    columns: true
  }, function (err, teas) {
    if (err) return console.error(err);

    // TODO: use Fabric's logs rather than console
    console.log(`CSV parsed, has ${teas.length} entries.  Beginning import...`);

    // TODO: use Promise.all or something similar
    for (let i = 0; i < teas.length; i++) {
      // Assign data fields...
      let data = Object.assign({
        name: teas[i].Class,
        price: teas[i].Oz_Price
      });

      // Create the Tea instance...
      remote.create(data, function (err, tea) {
        if (err) return console.error(`Error creating: ${err}`);
        console.log(`Tea created:`, tea);
      });
    }
  });

  fs.createReadStream(file).pipe(parser);
}

// TODO: allow use of command line parameters to specify file
// i.e., process.argv
doImport('./tools/tea.csv');
