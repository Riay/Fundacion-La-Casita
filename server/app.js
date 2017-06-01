const express = require('express')
const path = require('path')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const PORT = process.env.PORT

const app = express()


app.use(express.static( path.join(__dirname, '../client') ))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

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




app.listen(PORT)
console.log(`Listening on PORT ${PORT}`);