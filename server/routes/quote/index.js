const express = require('express')
const router = express.Router()

const updateQuote = require('./handlers/updateQuote')


router.put('/:id', updateQuote)


module.exports = router



