const express = require('express')
const path    = require('path')
const app     = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
  const index = path.join(__dirname, 'build', 'index.html')
  res.sendFile(index)
})

const PORT = process.env.PORT || 3000
app.listen(PORT)