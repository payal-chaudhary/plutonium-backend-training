const mongoose = require("mongoose")


const publisherPayal= new mongoose.Schema({
    name : String,
    headQuarter: String
})

module.exports = mongoose.model("Publisher1", publisherPayal)