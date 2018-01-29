var Sequelize = require('sequelize'), connection;

if (process.env.JAWSDB_URL) {
  connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  connection = new Sequelize('', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306'
  })
};

module.exports = connection;