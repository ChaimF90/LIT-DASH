
exports.up = function (knex, Promise) {
    return knex.schema.createTable('boards', table => {
        table.increments('id').primary();
        table.string('name');
        table.date('semesterStart');
        table.date('semesterEnd');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('boards');
};