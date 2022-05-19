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
        table.increments('step_id')
        table.string('step_text', 200).notNullable()
        table.integer('step_number').notNullable
        //need to point back to recipe - foreign key
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
    //step ingredients because proj wants us to see ingredients for that particular step not the recipe, check relationships. BUt since steps is already connected to recipe so it can still refer to it

    //remember it references steps and ingredients
    .createTable('step_ingredients', table => {
        //primary key
        table.increments('step_ingredients_id')
        table.float('quantity').notNullable
        //foreign key references the step
        table.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
           
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
