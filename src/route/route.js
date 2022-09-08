const express = require("express");
const router = express.Router();
const { createAuthor, login } = require("../controller/authorController")
const { createBlog, blogsDetails, deleteBlogByParams, deleteBlogByQuery, updateBlog } = require('../controller/blogController')
const { authenticate, authorise, authorise2 } = require("../middleware/auth")


router.post("/authors", createAuthor)
router.post("/login", login)
router.post("/blogs",authenticate, createBlog)
router.get("/blogs", blogsDetails)
router.put("/blogs/:blogId", authenticate, authorise, updateBlog)
router.delete("/blogs/:blogId", authenticate, authorise, deleteBlogByParams)
router.delete("/blogs", authenticate, authorise2, deleteBlogByQuery)



module.exports = router;