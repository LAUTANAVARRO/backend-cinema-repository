const express = require('express')
const app = express()

const dbEngine = process.env.DB_ENGINE

app.get('/', function (req, res) {
  res.send(`Using db engine -> ${dbEngine}`)
})

app.listen(7001)
