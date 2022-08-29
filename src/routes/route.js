const express = require('express');
const router = express.Router();
const user= require("../controllers/newUserController")
const middle= require("../middleware/auth")

///assignment///
router.get("/users/:userId", middle.statusCheck, user.getUserData)

router.put("/users/:userId", middle.statusCheck, user.updateUser)
router.delete("/users/:userId", middle.statusCheck, user.deleteApi)



router.post("/createNewUser", user.createNewUser)
router.post("/newUserlogin",user.newUserlogin)

module.exports = router;