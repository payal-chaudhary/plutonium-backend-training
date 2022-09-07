const express = require("express");
const router = express.Router();
const createAuthor = require("../controller/authorController")
const { createBlog, blogsDetails, deleteBlogByParams, deleteBlogByQuery, updateBlog } = require('../controller/blogController')
const { authenticate, authorise } = require("../middleware/auth")


router.post("/authors", createAuthor)
router.post("/blogs", createBlog)
router.get("/blogs", authenticate, authorise, blogsDetails)
router.put("/blogs/:blogId", authenticate, authorise, updateBlog)
router.delete("/blogs/:blogId", authenticate, authorise, deleteBlogByParams)
router.delete("/blogs", authenticate, authorise, deleteBlogByQuery)


module.exports = router;