src
let date = new Date()
let day = date.getDate();
let month = date.getMonth() + 1;

let currentDate = `${day}-${month}`;
console.log(currentDate); 

const info = function(){
    console.log("Batch-plutonium,week-3,Day-8,the topic being taught today is nodejs")

}
module.exports.today = info