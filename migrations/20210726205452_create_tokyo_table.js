
exports.up = function(knex) {
  return knex.schema.createTable('cities', function(table) {
      table.increments();
      table.string('name');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('cities');
};
