const express =require("express");
const router = express.Router();
const createAuthor = require("../controller/authorController")
const {createBlog, blogsDetails, deleteBlogByParams, deleteBlogByQuery, updateBlog} = require('../controller/blogController')



router.post("/authors", createAuthor)
router.post("/blogs", createBlog)
router.get("/getBlogs", blogsDetails)
router.put("/blogs/:blogId", updateBlog)
router.delete("/blogs/:blogId", deleteBlogByParams)
router.delete("/blogs", deleteBlogByQuery)


module.exports= router;