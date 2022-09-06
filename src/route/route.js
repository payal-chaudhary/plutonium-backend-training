const express =require("express");
const router = express.Router();
const createAuthor = require("../controller/authorController")
const {createBlog, AllBlogsDetails, filterBlogsDetails} = require('../controller/blogController')


router.post("/authors", createAuthor )
router.post("/blogs", createBlog )
router.get("/getAllBlogs", AllBlogsDetails )
router.get("/getBlogs", filterBlogsDetails )


module.exports= router;