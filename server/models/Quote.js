const mongoose = require('mongoose')
const collection = 'Quotes'
const Schema = mongoose.Schema

const QuoteSchema = new mongoose.Schema ({
    name: {
      type: String,
      required: true
    },
    status: {
       type: Boolean,
       default: false
    },
    email: {
       type: String
    },
    number: {
       type: Number
    },
    comments: {
       type: String
    }
},{collection})

module.exports = mongoose.model('Quote', QuoteSchema)