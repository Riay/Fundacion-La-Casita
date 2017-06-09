const Quote = require('../../../models/Quote')

function getAllCompleted(req,res) {

  Quote.find({status: true})
    .then( quotes => {
      res.render('Completed', {quotes})
    })
}

module.exports = getAllCompleted
