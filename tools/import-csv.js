var csv = require('csv');
var fs = require('fs');

var parser =csv.parse({columns: true}, function(err, data){
  console.log(data);
});

fs.createReadStream(__dirname+'/tea.csv').pipe(parser);
