const express = require('express');
const router = express.Router();
const Assi = require("../controllers/assiController")
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/createBooks", Assi.createBooks)
router.post("/booklist", Assi.booklist)
router.post("/getBooksInYear", Assi.getBooksInYear)
router.post("/getXINRBook", Assi.getXINRBook)
router.post("/getRandomBooks", Assi.getRandomBooks)
router.post("/getParticular", Assi.getParticular)





module.exports = router;