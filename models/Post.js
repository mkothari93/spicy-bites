const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");
const User = require("./User.js");

class Post extends Model {}

Post.init(
  {
    id: {
      //Defines data type as a Integer
      type: DataTypes.INTEGER,
      //Defines that it shouldn't allow null values
      allowNull: false,
      //Defines that this is the Primary Key
      primaryKey: true,
      //Defines to auto increment
      autoIncrement: true,
    },
    recipe_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    recipe_body: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // image: {
    //     type: DataTypes.IMAGE, 
    // },
    user_id: {
      //Defines data type as a Integer
      type: DataTypes.INTEGER,
      //Defines that it shouldn't allow null values
      allowNull: false,
      references: {
        Model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
