const data = require("../data/data");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tourism').del()
    .then(function () {
      // Inserts seed entries
      return knex('tourism').insert(data.tourism);
    });
};
