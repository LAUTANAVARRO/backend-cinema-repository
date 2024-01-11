const express = require('express')
const app = express()
const { router } = require('./routes')

const port = process.env.PORT || 7001

app.use(router)
app.listen(port, function() {
  console.log(`Listening on port ${port}...`)
})
