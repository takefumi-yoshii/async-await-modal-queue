var express = require('express')
var app = express()
const port = 8080

app.use(express.static('app'))
app.listen(port, () => {
  console.log(`Local: http://localhost:${port}`)
})
