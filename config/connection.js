require('dotenv').config();

const Sequelize = require('sequelize');
process.env.JAWSDB_URL =
  'mysql://szzhmvhv8gp2y04r:me91s71syksw9w47@exbodcemtop76rnz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/jl33h37uileruba5';

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;
