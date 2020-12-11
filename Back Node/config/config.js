require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": null,
    "database": "agence_immo",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": 3306
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": 3306
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
