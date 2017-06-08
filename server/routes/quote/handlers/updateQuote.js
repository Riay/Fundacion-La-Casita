const Quote = require('../../../models/Quote')

function updateQuote (req,res) {
	const { id } = req.params
	const { name, email } = req.body

	const dataToUpdate = {}
	if (name) dataToUpdate.name = name
	if (email) dataToUpdate.email = email


	Quote.findByIdAndUpdate( id,  dataToUpdate)
		.then( () => res.status(200).json({ msg: `Quote w/ id ${id} updated properly`}) )
		.catch( () => res.status(500).json({ msg: `error updating  Quote w/ id ${id} `}) )


}

module.exports = updateQuote