const mongoose = require("mongoose")

// models for MongoDB collection
const urlSchema = new mongoose.Schema({
    url: String,
    shortURL: String,
    shortCode: String,
    date: String
})

module.exports = urlSchema