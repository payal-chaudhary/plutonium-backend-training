const express =require("express");
const router = express.Router();
const author = require("../controller/projectController")


router.post("/authors", author.createAuthor )













module.exports= router;