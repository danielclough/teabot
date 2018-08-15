var csv = require('csv');
var fs = require('fs');

var data = fs.readFileSync('tea.csv');
csv.parse(data, { columns: true }, function (err, content) {
  console.log('Row:', content);
});
