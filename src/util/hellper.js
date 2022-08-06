
let date = new Date()
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;
console.log(currentDate); 

const info = function(){
    console.log("Batch-plutonium,week-3,Day-8,the topic being taught today is  - Plutonium, W3D3, the topic for today is Nodejs module system")
    // console.log(day,month);
}
module.exports.today = info