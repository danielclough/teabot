    var Maki = require('maki');
    var app = new Maki({
  service: {
    name: 'teabot'
  }
});

 app.define('Tea', {
  attributes: {
    tea: {
      type: String,
      max: 70
},
    country: {
      type: String,
      max: 70
    },
    province: {
      type: String,
      max: 70
},
    city: {
      type: String,
      max: 70
    },
    elevation: {
      type: String,
      max: 70
},
    date_of_harvest: {
      type: String,
      max: 70
    },
    company: {
      type: String,
      max: 70
},
    tea_master: {
      type: String,
      max: 70
    }
  }
});

app.define('Person', {
  attributes: {
    name: {
      type: String,
      max: 70
     },
  description: {
      type: String,
      max: 70
     }
   }
});
    app.start();
