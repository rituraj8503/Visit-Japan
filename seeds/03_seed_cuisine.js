const data = require("../data/data");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cuisine').del()
    .then(function () {
      return knex('cuisine').insert(data.cuisine);
    });
};
