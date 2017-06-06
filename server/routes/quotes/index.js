const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addQuote = require('./handlers/addQuote')
// const completeTask = require('./handlers/completeTask')

router.get('/Admin', getAll)
router.post('/Log', addQuote)
// router.get('/complete', completeTask)


module.exports = router