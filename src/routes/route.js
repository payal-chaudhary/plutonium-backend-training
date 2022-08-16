const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
//const books =require("../books/books.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/allBooks", UserController.allBooks)
router.get("/getBooks", UserController.getBooks)

// //assignment//
// router.post("/allBooks", async function(req,res){
//     let data1 = req.body;
//     let saveData1 = await books.create(data1)
//     res.send({msg:saveData1})
// })


module.exports = router;