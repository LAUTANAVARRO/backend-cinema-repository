const express = require('express')
const {
  createCinema,
  getCinemas,
} = require('./handlers/cinema')

const router = express.Router()

// Define all API routes here
router.get('/cinemas', getCinemas)
router.post('/cinemas', createCinema)

module.exports = { router }
