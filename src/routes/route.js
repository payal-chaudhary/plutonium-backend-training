const express = require('express');
const abc = require('../introduction/intro')
const logger =require('../logger/logger')
const info = require("../util/helper")
const formatter = require("../validator/formatter")
const lodash= require('lodash')
const router = express.Router();

router.get('/test-me', function (req, res) {
    logger.welcome()
    info.today()
    formatter.form()
    //console.log('My batch is', abc.name)
    //abc.printName()
    res.send('My first ever api!')
    const months = ['Jan','Feb','March','April','May','Jun','July','Aug','Sep','Oct','Nov','Dec']
    console.log(lodash.chunk(months, 4))

    const oddNum = [1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(oddNum))

    const arr1 =[1,2,3,4,5,6]
    const arr2 = [2,4,6,8,9]
    const arr3 = [1,5,3,7,10]
    const arr4 = [3,5,6,9]
    const arr5 =[11,13,15,10,20]
    const arr = lodash.union(arr1,arr2,arr3,arr4,arr4,arr5)
    console.log(arr)

    const pairs = [["horror","The Shinning"], ["drama","titanic"],["thriller",'shutter island'],["fantasy",'pans labyrinth']]
    const obj = lodash.fromPairs(pairs)
    console.log(obj)
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
    
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason