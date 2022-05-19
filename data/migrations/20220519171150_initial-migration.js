/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//start with tables that dont have existing foreign keys
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
        //makes columns
        table.increments('recipe_id') 
        //the data in the column
        table.string('recipe_name', 200).notNullable().unique

    })
    .createTable('ingredients', table => {
        table.increments('ingredients_id')
        table.string('ingredients_name', 200).notNullable().unique
        table.string('ingredient_unit', 50)
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
