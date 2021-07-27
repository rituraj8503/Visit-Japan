const data = require("../data/data");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('nature').del()
    .then(function () {
      // Inserts seed entries
      return knex('nature').insert(data.nature);
    });
};
