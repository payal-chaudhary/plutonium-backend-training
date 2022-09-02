const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const temp = require("../controllers/tem")
const meme =require("../controllers/meme")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

//assignment///
router.get("/cowin/getByDistrict",CowinController.getByDistrict )
router.get("/cityTemp", temp.getSortedCities)
router.post("/meme", meme.memeHandler)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;