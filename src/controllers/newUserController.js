const newUser= require("../models/newUserModel")
const jwt =require("jsonwebtoken")

const createNewUser= async function(req,res){
    let data= req.body
    let savedData= await newUser.create(data)
    res.send({msg:savedData})
}


const newUserlogin = async function(req,res){
    let userNewName= req.body.emailId
    let passwordNew =req.body.password

    let userNew= await newUser.findOne({emailId:userNewName, password:passwordNew});
    if(!userNew)
        return res.send({
            status:false,
            msg: "user name or password is not correct"})

        
        

    let token = jwt.sign(
            {
              userId: userNew._id.toString(),
              batch: "plutonium",
              organisation: "FunctionUp",
            },
            "functionup-plutonium-very-very-secret-key"
          );
          res.setHeader("x-auth-token", token);
          res.send({ status: true, token: token });}


    const getUserData = async function (req, res) {
      console.log("all good")
        // let token = req.headers["x-Auth-token"];
        // if (!token) token = req.headers["x-auth-token"];
        // if (!token) return res.send({ status: false, msg: "token must be present" });
           
            
        
              // let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
              // if (!decodedToken)
              //   return res.send({ status: false, msg: "token is invalid" });
            
              let userId = req.params.userId;
              let userDetails = await newUser.findById(userId);
              if (!userDetails)
                return res.send({ status: false, msg: "No such user exists" });
            
              res.send({ status: true, msg:userDetails });
           
            };


    const updateUser = async function (req, res) {
                 
                
    let userId = req.params.userId;
    let user = await newUser.findById(userId);
    if (!user) {
        return res.send("No such user exists");
                  }
                
                
                let userData = req.body;
  let updatedUser = await newUser.findOneAndUpdate(
    { _id: userId },
    userData,
    { new: true }
  );
  res.send({ status: true, msg:updateUser});}


  const deleteApi = async function(req,res){
    // let token = req.headers["x-Auth-token"];
    //     if (!token) token = req.headers["x-auth-token"];
    //     if (!token) return res.send({ status: false, msg: "token must be present" });
     let userId = req.params.userId;
              let userDetails = await newUser.findById(userId);
              if (!userDetails)
                return res.send({ status: false, msg: "No such user exists" });
        
                let updatedUser = await newUser.findOneAndUpdate(
                  { _id: userId },
                  {isDeleted:true},
                  { new: true }
                );
                res.send({ status: true, data: updatedUser });}
      




  

        



module.exports.createNewUser=createNewUser
module.exports.newUserlogin=newUserlogin
module.exports.getUserData=getUserData
module.exports.updateUser=updateUser
module.exports.deleteApi=deleteApi