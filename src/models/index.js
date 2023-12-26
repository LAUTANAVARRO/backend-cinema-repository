const { Sequelize } = require('sequelize')
// define models
// require('./Cinema')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../../data.sqlite'
})

async function initDB() {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

initDB()

module.exports = {
  sequelize
}
