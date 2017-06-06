const Quote = require('../../../models/Quotes')

function getAll(req,res) {

  Quote.find()
      .then( tasks => {
      	
      	res.render('Admin',{quotes})
      })
}

module.exports = getAll