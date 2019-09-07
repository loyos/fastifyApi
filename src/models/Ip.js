// External Dependancies
const mongoose = require('mongoose')

const ipSchema = new mongoose.Schema({
  ip: String,
  dateTime: String
})

module.exports = mongoose.model('Ip', ipSchema)