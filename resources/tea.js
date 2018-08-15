module.exports = {
  attributes: {
    name:            { type: String, max: 140 },
    country:         { type: String, max: 70 },
    province:        { type: String, max: 70 },
    city:            { type: String, max: 70 },
    elevation:       { type: String, max: 70 },
    date_of_harvest: { type: Date },
    company:         { type: String, max: 70 },
    tea_master:      { type: String, max: 70 }
  }
};
