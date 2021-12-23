const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'MONIKATHEBEST',
    password: 'Password21!'
  },
  {
    username: 'rafael_the_great',
    password: 'Password21!'
  },
  {
    username: 'queenLeticia',
    password: 'Password21!'
  },
  {
    username: 'studmuffinhares',
    password: 'Password21!'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;