const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId



const bookPayal= new mongoose.Schema({
    name : String,
    author:{
        type: ObjectId,
        required:true,
        ref: "Author1"
    },
    isHardCover: {
        default: false
    },
    price: Number,
    rating: Number,
    publisher:{
        type: ObjectId,
        required: true,
        ref: "Publisher1"
    }

})

module.exports = mongoose.model("Book1", bookPayal)