const path = require('path');
require('dotenv').config({
  path: path.resolve( __dirname, '../../../.env')
});

const { POSTGRES_HOST,
POSTGRES_USER,
POSTGRES_PASSWORD, POSTGRES_PORT } = process.env;

module.exports = {
  "development": {
    "username": POSTGRES_USER,
    "password": POSTGRES_PASSWORD,
    "database": "mdms_dev",
    "host": POSTGRES_HOST,
    "dialect": "postgres",
    "port": POSTGRES_PORT
  },
  "test": {
    "username": POSTGRES_USER,
    "password": POSTGRES_PASSWORD,
    "database": "mdms_test",
    "host": POSTGRES_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": POSTGRES_USER,
    "password": POSTGRES_PASSWORD,
    "database": "mdms_prod",
    "host": POSTGRES_HOST,
    "dialect": "postgres"
  }
}
