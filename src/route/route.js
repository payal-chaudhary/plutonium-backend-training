const express =require("express");
const router = express.Router();
const createAuthor = require("../controller/authorController")
const {createBlog, blogsDetails} = require('../controller/blogController')


router.post("/authors", createAuthor )
router.post("/blogs", createBlog )
router.get("/getBlogs", blogsDetails )


module.exports= router;