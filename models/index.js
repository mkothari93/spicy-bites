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

//Post belongs to many tags (through PostTag)
Post.belongsToMany(Tag, {
  through: PostTag,
  foreignKey: "post_id",
});

//Category has many posts
Category.hasMany(Post, {
  foreignKey: "category_id",
});

Category.hasMany(Tag, {
  foreignKey: "category_id",
});


Tag.belongsToMany(Category, {
  through: "PostTag",
  foreignKey: "tag_id"
})

// Tags belongToMany Post (through PostTag)
Tag.belongsToMany(Post, {
  through: PostTag,
  foreignKey: "tag_id",
});



module.exports = { User, Post, Category, Tag, PostTag };
