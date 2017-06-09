const express = require('express')
const router = express.Router()


const getAllCompleted = require('./handlers/getAllCompleted')
const getAllDeletes = require('./handlers/getAllDeletes')
const getAll = require('./handlers/getAll')
const addQuote = require('./handlers/addQuote')


router.get('/', getAll)
router.post('/appointments', addQuote)
router.get('/Completed', getAllCompleted)
router.get('/Trash', getAllDeletes)



module.exports = router