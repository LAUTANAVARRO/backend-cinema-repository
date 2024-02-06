const path = require('path')

module.exports = {
  development: {
    database: "database_development",
    storage: path.join(__dirname, '../', 'data.sqlite'),
    host: "localhost",
    dialect: "sqlite"
  },
  test: {
    database: "database_test",
    host: "../data.sqlite",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
