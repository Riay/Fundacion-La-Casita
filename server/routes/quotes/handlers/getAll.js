const Quote = require('../../../models/Quote')
console.log('find')

function getAll(req,res) {

  Quote.find()
      .then( quotes => res.json(quotes))
}

module.exports = getAll