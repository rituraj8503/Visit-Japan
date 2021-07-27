
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cities').del()
    .then(function () {
      // Inserts seed entries
      return knex('cities').insert([
        {id: 1, name: 'Tokyo'},
        {id: 2, name: 'Osaka'},
        {id: 3, name: 'Kyoto'},
      ]);
    });
};
