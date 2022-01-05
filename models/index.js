// import all models
const Post = require('./Post');
const User = require('./User');
const Category = require('./Category');
const Comment = require('./Comment');
//Create associations
//User has many posts
User.hasMany(Post, {
  foreignKey: 'user_id'
});
//Post belongs to one user
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});
//Post belongs to one Category
Post.belongsTo(Category, {
  foreignKey: 'category_id'
});
//Category has many posts
Category.hasMany(Post, {
  foreignKey: 'category_id'
});
//Comment belongs to one user
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});
//Comment belongs to one post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});
//User has many comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});
//Post has many comments
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});
module.exports = { User, Post, Category, Comment };
