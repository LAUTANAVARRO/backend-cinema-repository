const { Sequelize, DataTypes } = require('sequelize')

module.exports = Sequelize.define('Cinema', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})
