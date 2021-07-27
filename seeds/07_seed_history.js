const data = require("../data/data");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('history').del()
    .then(function () {
      // Inserts seed entries
      return knex('history').insert(data.history);
    });
};
