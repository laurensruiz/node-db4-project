/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//start with tables that dont have existing foreign keys
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
        table.increments() //columns
    })
    .createTable('ingredients', table => {
        table.increments()
    })
    .createTable('steps', table => {
        table.increments()
    })
    .createTable('step_ingredients', table => {
        table.increments()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//deletes remember it has to be in reverse

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
