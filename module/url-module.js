const mongoose = require("mongoose")
const Schema = mongoose.Schema

const urlSchema = new Schema({
  url: {
    type: String,
    require: true,
    unique: true
  },
  shortURL: {
    type: String,
    require: true,
    unique: true
  },
  shortCode: {
    type: String,
    require: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("URL", urlSchema)