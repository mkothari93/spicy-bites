const sequelize = require("../config/connection");
const { Post } = require("../models");

const postdata = [
  {
    recipe_name: "Alfredo Pasta",
    recipe_body: "lorem",
    filename: 'chicken_alfredo.jpg',
    user_id: 1,
    category_id: 3,
  },
  {
    recipe_name: "Chicken marsala",
    recipe_body: "lorem",
    filename: 'chicken_marsala.jpg',
    user_id: 3,
    category_id: 3,
  },
  // {
  //   recipe_name: "Chicken marsala with mushroom",
  //   recipe_body: "lorem",
  //   filename: 'chicken_alfredo.jpg',
  //   user_id: 4,
  //   category_id: 3
  // },
  {
    recipe_name: "Rice and beans",
    recipe_body: "lorem",
    filename: 'rice_beans.jpg',
    user_id: 2,
    category_id: 3,
  },
  {
    recipe_name: "Potato curry",
    recipe_body: "lorem",
    filename: 'potato_curry.jpg',
    user_id: 4,
    category_id: 3,
  },
];
const seedPosts = () => Post.bulkCreate(postdata, { individualHooks: true });

module.exports = seedPosts;
