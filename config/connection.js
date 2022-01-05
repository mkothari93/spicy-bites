require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      define: { 
        charset: "utf8", 
          dialectOptions: { 
            decimalNumbers: true,
            collate: "utf8_general_ci" 
          } 
      }
    });
      
    //   dialectOptions: {
        
    //     charset: 'utf8',
    //     collate: 'utf8_general_ci',
    //   },
    // });

module.exports = sequelize;