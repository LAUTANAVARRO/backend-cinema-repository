const { Cinema } = require('../../models')

function createCinema() {
  console.log('se llama al endpoint de createCinema')
}

async function getCinemas(_req, res) {
  const cinemas = await Cinema.findAll()
  res.json({ cinemas })
}

async function getCinema(req, res) {
  const cinemaId = req.params.id
  const cinema = await Cinema.findByPk(cinemaId)
  if (!cinema) {
    res.status(404).json({
      error: 'Cinema not found'
    })
    return
  }
  res.json({ cinema })
}

module.exports = {
  createCinema,
  getCinemas,
  getCinema,
}
