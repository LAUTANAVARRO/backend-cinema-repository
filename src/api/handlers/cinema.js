const db = require('../../models')
const Cinema = require('../../models/Cinema')(
  db.sequelize,
  db.Sequelize.DataTypes
)

function createCinema() {
  console.log('se llama al endpoint de createCinema')
}

async function getCinemas(_req, res) {
  const cinemas = await Cinema.findAll()
  console.log('cinemas ->', cinemas)
  res.send({ cinemas })
}

module.exports = {
  createCinema,
  getCinemas,
}
