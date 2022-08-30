const express = require('express');
const router = express.Router();
const user= require("../controllers/newUserController")
const {authenticate,authorise}= require("../middleware/auth")

///assignment///
router.get("/users/:userId", authenticate,authorise, user.getUserData)

router.put("/users/:userId", authenticate,authorise, user.updateUser)
router.delete("/users/:userId", authenticate,authorise, user.deleteApi)



router.post("/createNewUser", user.createNewUser)
router.post("/newUserlogin",user.newUserlogin)

module.exports = router;