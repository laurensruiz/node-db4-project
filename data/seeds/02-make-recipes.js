const recipes = [
    {recipe_name: 'Adobo'},
    {recipe_name: 'Sisig'},
    {recipe_name: 'Sinigang'},
] 


const ingredients = [
    {ingredient_name: 'Chicken', ingredient_unit:'lbs'},
    {ingredient_name: 'Pork', ingredient_unit:'lbs'},
    {ingredient_name: 'Beef', ingredient_unit:'lbs'},
    {ingredient_name: 'Tomato', ingredient_unit:'pieces'},
    {ingredient_name: 'Soy Sauce', ingredient_unit:'tbsp'},
    {ingredient_name: 'Vinegar', ingredient_unit:'tbsp'},
]

const step_ingredients = [
    //Adobo
    {step_id: 2, ingredient_id: 1, quantity: 1},
    {step_id: 3, ingredient_id: 2, quantity: 1},
    //Sisig
    {step_id: 5, ingredient_id: 3, quantity: 1},
    {step_id: 6, ingredient_id: 4, quantity: 1},
    //Sinigang
    {step_id: 8, ingredient_id: 5, quantity: 1},
    {step_id: 9, ingredient_id: 6, quantity: 1},
]

//seeding with foreign keys
const steps = [
    //Adobo
    {step_text: 'Heat Pan', step_number: 1, recipe_id: 1},
    {step_text: 'Add Chicken', step_number: 2, recipe_id: 1},
    {step_text: 'Add Soy Sauce', step_number: 3, recipe_id:1},
    //Sisig
    {step_text: 'Heat Pan', step_number: 1, recipe_id: 2},
    {step_text: 'Add Pork', step_number: 2, recipe_id:2 },
    {step_text: 'Add vinegar', step_number: 3, recipe_id: 2},
    //Sinigang
    {step_text: 'Heat Pan', step_number: 1, recipe_id: 3},
    {step_text: 'Add Beef', step_number: 2, recipe_id: 3},
    {step_text: 'Add tomato', step_number: 3, recipe_id: 3},
]



exports.seed = async function(knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}