const express = require('express');
const abc = require('../introduction/intro')
const logger =require('../logger/logger')
const info = require("../util/helper")
const formatter = require("../validator/formatter")
const lodash= require('lodash')
const router = express.Router();

router.get('/test-me', function (req, res) {
    logger.printInfo()
    info.today()
    formatter.trimMyString()
    formatter.getUpperCaseString()
    formatter.getUpperCaseString()
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
router.get('/students', function(req,res){
 let students =["Sabhia", "Neha", "Akash"]
 res.send(students)
})

router.get('/student-details/:name', function(req,res){
    console.log("this is the request " + JSON.stringify(req.params)  )
    let reqParams = req.params
    let studentName = reqParams.name 
    console.log('name of the student is ' , studentName)
    res.send(studentName)
}) 
//  question 1//////

router.get('/movies', function (req,res){
    let movies  = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    res.send(movies)
    console.log(movies)
});

// question 2 

router.get('/movies/:indexNumber',function (req, res){
    let moviesName = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    let xyz = req.params.indexNumber
    console.log(moviesName[xyz])
    res.send(moviesName[xyz])
});


// question 3


router.get('/moviescheck/:indexNumber', function (req, res){
    const movies = ["Tenet","The Btamna Begins","Pather Pachali","Charlie The Choclate Factory"];
    const index = req.params.indexNumber;
       if(index<4){
        res.send(movies[index]);
        console.log(movies[index]);
       }else{
        res.send("use a valid index");
        console.log("use a valid index");
       }
});

// question 4


router.get('/films', function (req, res){
    const films = [{
     "id": 1,
     "name": "The Shining"
    }, {
     "id": 2,
     "name": "Incendies"
    }, {
     "id": 3,
     "name": "Rang de Basanti"
    }, {
     "id": 4,
    "name": "Finding Nemo"
    }]
    res.send(films);
    console.log(films)
});

//  question 5





router.get('/films/:filmId', function(req,res){
    const films = [{
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
       "name": "Finding Nemo"
       }]
       const xyz = req.params.filmId;
       if(xyz<5 && xyz > 0){
        res.send(films[xyz-1]);
        console.log((films[xyz-1]))
       }else{
        res.send("No movie exists with this id")
        console.log("No movie exists with this id")
       }

   });


module.exports = router;
// adding this comment for no reason