const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
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
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;