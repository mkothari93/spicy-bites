const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'MONIKATHEBEST',
    email: 'sports_gal.1993@gmail.com',
    password: 'Password21!'
  },
  {
    username: 'rafael_the_great',
    email: 'rafaelGOAT@yahoo.com',
    password: 'Password21!'
  },
  {
    username: 'queenLeticia',
    email: 'leticiaqueenbee@aol.com',
    password: 'Password21!'
  },
  {
    username: 'studmuffinhares',
    email: 'studhares@gmail.com',
    password: 'Password21!'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;