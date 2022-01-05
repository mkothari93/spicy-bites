const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'monmon',
    password: 'Password21!'
  },
  {
    username: 'rafael_the_foodie',
    password: 'Password21!'
  },
  {
    username: 'queenLeticia',
    password: 'Password21!'
  },
  {
    username: 'greenlighthares',
    password: 'Password21!'
  },
  {
    username:'kittykat22',
    password:'123456789'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;