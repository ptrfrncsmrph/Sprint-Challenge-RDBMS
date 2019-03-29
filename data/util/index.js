const knex = require("knex")
const db = require("../dbConfig")

const getDishes = () => db("dishes")
const addDish = dish => db("dishes").insert(dish)
const getDish = id =>
  db("dishes")
    .leftJoin("recipes", "dishes.id", "recipes.dish_id")
    .select(
      "dishes.id",
      "dishes.name as dish",
      knex.raw("group_concat(recipes.name, '%%') as recipes")
    )
    .where({ "dishes.id": id })
    .map(obj => Object.assign(obj, { recipes: obj.recipes.split("%%") }))
const getRecipes = () => db("recipes")
const getRecipe = id => db("recipes").where({ id })
const addRecipe = recipe => db("recipes").insert(recipe)

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  getRecipe,
  addRecipe
}
