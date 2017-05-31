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
  res.render('index')
})

app.get('/Acerca', (req, res) => {
  res.render('About')
})

app.get('/Historia', (req, res) => {
  res.render('Historia')
})

app.get('/Cursos', (req, res) => {
  res.render('Courses')
})


app.listen(PORT)
console.log(`Listening on PORT ${PORT}`);