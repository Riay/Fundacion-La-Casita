const Quote = require('../../../models/Quote')

function updateQuote (req,res) {
	const { id } = req.params
	const { name, mail } = req.body

	const dataToUpdate = {}
	if (name) dataToUpdate.name = name
	if (mail) dataToUpdate.mail = mail


	Quote.findByIdAndUpdate( id,  dataToUpdate)
		.then( () => res.status(200).json({ msg: `pizza w/ id ${id} updated properly`}) )
		.catch( () => res.status(500).json({ msg: `error updating  pizza w/ id ${id} `}) )


}

module.exports = updateQuote