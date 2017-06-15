const express = require('express')
const router = express.Router()

const updateQuote = require('./handlers/updateQuote')
const deleteQuote = require('./handlers/deleteQuote')

router.put('/:id', updateQuote)
router.delete('/:id', deleteQuote)


module.exports = router



