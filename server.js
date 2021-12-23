const express = require('express');
//Imports routes
const routes = require('./controllers');
const exphbs = require('express-handlebars');

//Imports sequelize connection
const sequelize = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


//Syncs sequelize models to the database, then turn on the server
sequelize.sync({force:false}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})