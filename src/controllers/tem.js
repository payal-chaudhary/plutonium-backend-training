const { default: axios } = require("axios")

let getSortedCities= async function(req,res){
    try{
        let cities =["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjectArray=[]
    for(i=0;i<cities.length;i++){
        let obj={city:cities[i]}
        let resp= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=3d135126f32f143ce6f408f01baff05b`)
        console.log(resp.data.main.temp)
        obj.temp=resp.data.main.temp
        cityObjectArray.push(obj)
    }
let sorted = cityObjectArray.sort(function(a,b){ return a.temp-b.temp})
console.log(sorted)
res.status(200).send({status:true, data:sorted})
    
    }catch(error){
        console.log(error)
        res.status(500).send({status:false, msg:"server error"})
    }

}

module.exports.getSortedCities=getSortedCities