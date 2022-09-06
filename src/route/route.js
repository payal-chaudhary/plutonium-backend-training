const express =require("express");
const router = express.Router();
const createAuthor = require("../controller/authorController")
const {createBlog, blogsDetails, deleteBlogByParams} = require('../controller/blogController')



router.post("/authors", createAuthor)
router.post("/blogs", createBlog)
router.get("/getBlogs", blogsDetails)
router.delete("/blogs/:blogId", deleteBlogByParams)


module.exports= router;