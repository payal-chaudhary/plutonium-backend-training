const mongoose = require("mongoose")


const authorPayal= new mongoose.Schema({
    authorName : String,
    age : Number,
    address: String,
    rating: Number
})

module.exports = mongoose.model("Author1", authorPayal)