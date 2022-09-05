const blogModel = require('../model/blogModel')
const authorModel = require('../model/authorModel')
const moment = require('moment')
const createBlog = async function (req, res) {
    try {
        const blog = req.body;
        const authorId = blog.authorId

        if (!authorId) {
            return res.send({ status: false, msg: "Plz enter author id" })
        }
        const isValidAuthor = await authorModel.findById(authorId)
        if (!isValidAuthor) {
            return res.send({ status: false, msg: "Author dosen't exist" })
        }
        if(blog.isPublished == true){
            blog.publishedAt = moment()
        }
        const saveBlog = await blogModel.create(blog)
        return res.status(201).send({
            status: true,
            data: saveBlog
        })
    }
    catch (err) {
        return res.status(400).send({
            status: false,
            msg: err.message
        })
    }
}

module.exports.createBlog = createBlog

