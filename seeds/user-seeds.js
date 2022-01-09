const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'monmon',
    email: 'fakeemail1@gmail.com',
    password: 'Password21!'
  },
  {
    username: 'rafael_the_foodie',
    email: 'fakeemail2@gmail.com',
    password: 'Password21!'
  },
  {
    username: 'queenLeticia',
    email: 'fakeemail3@gmail.com',
    password: 'Password21!'
  },
  {
    username: 'greenlighthares',
    email: 'fakeemail4@gmail.com',
    password: 'Password21!'
  },
  {
    username:'kittykat22',
    email: 'fakeemail5@gmail.com',
    password:'123456789'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;