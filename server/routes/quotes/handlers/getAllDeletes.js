const Quote = require('../../../models/Quote')

function getAllCompleted(req,res) {

  Quote.find({status: true})
    .then( quotes => {
      res.render('Trash', {quotes})
    })
}

module.exports = getAllCompleted
