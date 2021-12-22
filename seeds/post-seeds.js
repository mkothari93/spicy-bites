const sequelize = require("../config/connection");
const { Post } = require("../models");

const postdata = [
  {
    recipe_name: "Alfredo Pasta",
    recipe_body: "lorem",
    user_id: 1,
  },
  {
    recipe_name: "Chicken marsala",
    recipe_body: "lorem",
    user_id: 3,
  },
  {
    recipe_name: "Chicken marsala with mushroom",
    recipe_body: "lorem",
    user_id: 4,
  },
  {
    recipe_name: "Rice and beans",
    recipe_body: "lorem",
    user_id: 2,
  },
  {
    recipe_name: "Potato curry",
    recipe_body: "lorem",
    user_id: 2,
  },
];
const seedPosts = () => Post.bulkCreate(postdata, { individualHooks: true });

module.exports = seedPosts;
