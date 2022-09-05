const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        body: {
            type: String,
            require: true
        },
        authorId: {
            type: ObjectId,
            ref: "Author",
            require: true
        },
        tags: [String],
        category: {
            type: String,
            require: true
        },
        subcategory: {
            type: [String]
        },
        isPublished: {
            type: Boolean,
            default: false
        },
        publishedAt: {
            type : String,
            default :""
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
        deletedAt: String

    }, { timestamps : true}

)

module.exports = mongoose.model("blog" ,blogSchema)