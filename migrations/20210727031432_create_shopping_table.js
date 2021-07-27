
exports.up = function(knex) {
    return knex.schema.createTable('shopping', function(table) {
        table.increments();
        table.string('name');
        table.text('description');
        table.float('latitude');
        table.float('longitude');
        table.text('img_url');
        table.integer('city_id').references('id').inTable('cities');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('shopping');
};
