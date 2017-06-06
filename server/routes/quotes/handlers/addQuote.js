const Quote = require('../../../models/Quotes')

function addQuote(req,res) {

	const { name } = req.body
	const newQuote = new Quote ({ name })

	newQuote.save()
      .then( msg => {
      	 res.redirect('/Log')
      })
      .catch( err => {
      	res.json(err)
      })

}

module.exports = addQuote