const express =require("express");
const router = express.Router();
const author = require("../controller/authorController")
const blog = require('../controller/blogController')
const authorModel = require('../model/authorModel')
const blogModel = require('../model/blogModel')

router.post("/authors", author.createAuthor )
router.post("/blogs", blog.createBlog )

router.get("/blog" ,async function(req,res){
    const getAuthor = await blogModel.find().populate('authorId')
    res.send(getAuthor)
})

module.exports= router;