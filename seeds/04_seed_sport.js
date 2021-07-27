const data = require("../data/data");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sport').del()
    .then(function () {
      // Inserts seed entries
      return knex('sport').insert(data.sport);
    });
};
