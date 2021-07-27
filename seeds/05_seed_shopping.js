const data = require("../data/data");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shopping').del()
    .then(function () {
      // Inserts seed entries
      return knex('shopping').insert(data.shopping);
    });
};
