'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    static associate(models) {
      // define association here
    }
  }
  Cinema.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cinema',
  })
  return Cinema
}
