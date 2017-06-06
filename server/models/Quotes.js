const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuoteSchema = new Schema ({
    name: {
      type: String,
      required: true
    },
    mail: {
       type: String,
    },
    number: {
       type: Number,
    },
    comments: {
       type: String,
    }


})

const Quote = mongoose.model('Quote', QuoteSchema)

module.exports = Quote