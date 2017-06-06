const Quote = require('../../../models/Quote')

function addQuote(req,res) {
	const { name, status, mail, number, comments } = req.body
	const quote = new Quote ({ name, status, mail, number, comments })
	quote.save()
		.then( () => res.status(200).json({ msg: 'quote inserted properly'}) )
		.catch( () => res.status(500).json({ msg: 'error inserting quote'}) )
}


module.exports = addQuote