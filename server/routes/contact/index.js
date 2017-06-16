const express = require('express')
const router = express.Router()

const sendMail = require('./handlers/contactMail')

router.post('/Contact', sendMail)

module.exports = router
