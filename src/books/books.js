const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
    bookName: String,
    authorName: String,
    category: String,
    year:{
       type:String,
       unique:true,
       required:true
    },
    totalCopy: String
}, { timestamps:true,

});

module.exports= mongoose.model("Book", booksSchema)//books

