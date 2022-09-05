const express =require("express");
const router = express.Router();
const author = require("../controller/authorController")
const blog = require('../controller/blogController')
const authorModel = require('../model/authorModel')


router.post("/authors", author.createAuthor )
router.post("/blogs", blog.createBlog )



module.exports= router;