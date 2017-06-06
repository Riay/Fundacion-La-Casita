const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addQuote = require('./handlers/addQuote')


router.get('/', getAll)
router.post('/', addQuote)



module.exports = router