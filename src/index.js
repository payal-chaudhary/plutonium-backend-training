const express = require('express');
const bodyParser = require('body-parser');
const {default:mongoose} = require('mongoose')
const route = require('./routes/route.js');
const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb+srv://payal-chaudhary:Love9711!!@cluster0.jjm7nst.mongodb.net/?retryWrites=true&w=majority")
.then( ()=> console.log("Mongodb is connected"))
.catch(  err => console.log(err))
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
