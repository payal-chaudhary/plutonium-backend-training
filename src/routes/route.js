const express = require('express');
const router = express.Router();
//const userController= require("../controllers/userController")
const user= require("../controllers/newUserController")
const middle= require("../middleware/auth")
//const jwt= require("jsonwebtoken")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//router.post("/users", userController.createUser  )


//router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", middle.statusCheck, user.getUserData)

router.put("/users/:userId", middle.statusCheck, user.updateUser)
router.delete("/users/:userId", middle.statusCheck, user.deleteApi)


///assignment///
router.post("/createNewUser", user.createNewUser)
router.post("/newUserlogin",user.newUserlogin)

module.exports = router;