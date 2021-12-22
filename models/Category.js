const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
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
    category_name: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;