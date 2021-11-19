module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "suitehouse",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false,
    // "timezone": '-3:00' // Zona horaria de Argentina
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
