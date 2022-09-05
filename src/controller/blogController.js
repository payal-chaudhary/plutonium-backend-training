const blogModel = require('../model/blogModel')
const authorModel = require('../model/authorModel')

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


const AllBlogsDetails = async function (req, res) {
    try {
        let data = await blogModel.find({ ispublished: false, isDeleted: false })
        if (!data) return res.status(404).send({ status: false, msg: "No Blogs found" })
        return res.status(200).send({ status: true, msg: data })

    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

const filterBlogsDetails = async function (req, res) {
    try {
        let { authorId, category, subcategory,tags} = req.query
        let data = await blogModel.find({ $:[{authorId:authorId},{category:category},{subcategory:subcategory},{tags:tags}]})
        let size = data.length
        if (size < 1) return res.status(404).send({ status: false, msg: "No Blogs found" })
        return res.status(200).send({ status: true, msg: data })

    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

module.exports = { createBlog, AllBlogsDetails, filterBlogsDetails }

