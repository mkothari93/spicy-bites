// import all models
const Post = require("./Post");
const User = require("./User");
const Category = require("./Category");
const Tag = require("./Tag");
const PostTag = require("./PostTag");

//Create associations

//User has many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

//Post belongs to one user
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

//Post belongs to one Category
Post.belongsTo(Category, {
  foreignKey: "category_id",
});

//Category has many posts
Category.hasMany(Post, {
  foreignKey: "category_id",
});

//Post belongs to many tags (through PostTag)
Post.belongsToMany(Tag, {
  through: PostTag,
  foreignKey: "post_id",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: "description",
  foreignKey: "tag_id",
});

// User.belongsToMany(Post, {
//   through: Tag,
//   as: "voted_posts",

//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Post.belongsToMany(User, {
//   through: Vote,
//   as: "voted_posts",
//   foreignKey: "post_id",
//   onDelete: "SET NULL",
// });

// Vote.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Vote.belongsTo(Post, {
//   foreignKey: "post_id",
//   onDelete: "SET NULL",
// });

// User.hasMany(Vote, {
//   foreignKey: "user_id",
// });

// Post.hasMany(Vote, {
//   foreignKey: "post_id",
// });

// Comment.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Comment.belongsTo(Post, {
//   foreignKey: "post_id",
//   onDelete: "SET NULL",
// });

// User.hasMany(Comment, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Post.hasMany(Comment, {
//   foreignKey: "post_id",
// });

module.exports = { User, Post, Category, Tag, PostTag };
