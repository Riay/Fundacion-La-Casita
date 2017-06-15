const Quote = require('../../../models/Quote')

function removeById (req,res) {

  const { id } = req.params

  Quote.findByIdAndRemove(id)
    .then( msg => {
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })

}

module.exports = removeById