const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const routerQuotes = require('./routes/quotes')
const routerBody = require('./routes/middelwares/body')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const DB_URI = process.env.DB_URI
const PORT = process.env.PORT


mongoose.Promise = Promise
mongoose.connect(DB_URI)

app.use(express.static(path.join(__dirname, '../client')))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))


app.use(routerBody)
app.use('/quotes', routerQuotes)


app.get('/', (req, res) => {
  res.render('index', { section :'home'})
})

app.get('/About', (req, res) => {
  res.render('About', { section: 'about'})
})

app.get('/History', (req, res) => {
  res.render('History')
})

app.get('/Courses', (req, res) => {
  res.render('Courses')
})

app.get('/Gallery', (req, res) => {
  res.render('Gallery')
})

app.get('/Contact', (req, res) => {
  res.render('Contact')
})

app.get('/appointments', (req, res) => {
  res.render('Log')
})

app.get('/Admin', (req, res) => {
	res.render('Admin')
})

app.get('/Login', (req, res) => {
	res.render('login')
})


app.listen(PORT)
console.log(`Listening on PORT ${PORT}`);