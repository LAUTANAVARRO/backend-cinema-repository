const express = require('express')
const {
  createCinema,
  getCinemas,
  getCinema,
} = require('./handlers/cinema')

const router = express.Router()

// Define all API routes here
router.get('/cinemas', getCinemas)
router.get('/cinemas/:id', getCinema)
router.post('/cinemas', createCinema)

module.exports = { router }
