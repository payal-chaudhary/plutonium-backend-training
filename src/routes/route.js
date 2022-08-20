const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const authorPayal =require("../controllers/authorPayalCon");
const publisherPayal = require('../controllers/publisherPayalCon');
const bookPayal = require('../controllers/bookPayalCon');
const detailBook = require("../controllers/bookPayalCon")




router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/createAuthorPayal", authorPayal.createAuthorPayal)
router.post("/createPublisherPayal",publisherPayal.createPublisherPayal)
router.post("/createBookPayal",bookPayal.createBookPayal)
router.get("/getBooksPayal", detailBook.getBooksPayal)
router.put("/books",bookPayal.updateCover)
//router.put("/updatePrice",bookPayal.updatePrice)


module.exports = router;