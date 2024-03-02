const express = require('express')
const cors = require('cors')
const app = express()
const { router } = require('./routes')

const port = process.env.PORT || 7001

// middlewares
app.use(cors())
app.use(router)

app.listen(port, function() {
  console.log(`Listening on port ${port}...`)
})
