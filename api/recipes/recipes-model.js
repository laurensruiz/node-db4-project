function getRecipeById(recipe_id) {
    return Promise.resolve(`I like the ${recipe_id}`)
}

module.exports = {
    getRecipeById
}