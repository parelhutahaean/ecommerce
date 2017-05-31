const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./routes/api')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/book_store')
let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log('connection success')
})
require('dotenv').config()

app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', api)

app.get('/', (req, res) => {
  res.send('Alive')
})

app.listen(app.get('port'), function(){
  console.log('listening on port '+ app.get('port'))
})
