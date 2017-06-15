const path = require('path')
const Quote = require('../../../models/Quote')

function addQuote(req,res) {

	let { name, email, number, comments } = req.body
	number = +number

	const quote = new Quote ({ name, email, number, comments })

	console.log ({ name, email, number, comments })
	quote.save()
		.then( () => res.status(200).json({ msg: 'quote inserted properly'}) )
		.catch( () => res.status(500).json({ msg: 'error inserting quote'}) )
}


module.exports = addQuote
