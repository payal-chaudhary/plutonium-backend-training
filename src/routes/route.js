const express = require('express');
const abc = require('../introduction/intro')
const logger =require('../logger/logger')
const info =require("../util/hellper")
const formatter = require("../validator/formatter")
const router = express.Router();

router.get('/test-me', function (req, res) {
    logger.welcome()
    info.today()
    formatter.form()
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My first ever api!')
});


router.get('/test-you', function(req, res){
    logger.welcome()
    res.send('This is the second routes implementation')
    
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason