const { Cinema } = require('../../models')

function createCinema() {
  console.log('se llama al endpoint de createCinema')
}

async function getCinemas(_req, res) {
  const cinemas = await Cinema.findAll()
  res.json({ cinemas })
}

module.exports = {
  createCinema,
  getCinemas,
}
