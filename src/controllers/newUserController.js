const newUser = require("../models/newUserModel");
const jwt = require("jsonwebtoken");

const createNewUser = async function (req, res) {
  try{
    let data = req.body;
  let savedData = await newUser.create(data);
  res.send({ msg: savedData })}
  catch(err){res.status(400).send({msg:err.message})}
};

const newUserlogin = async function (req, res) {
  try{
  let userNewName = req.body.emailId;
  let passwordNew = req.body.password;

  let userNew = await newUser.findOne({
    emailId: userNewName,
    password: passwordNew,
  });
  if (!userNew)
    return res.send({
      status: false,
      msg: "user name or password is not correct",
    });

  let token = jwt.sign(
    {
      userId: userNew._id.toString(),
      batch: "plutonium",
      organisation: "FunctionUp",
    },
    "functionup-plutonium-very-very-secret-key"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
}
catch(err){res.status(400).send({error: err.message})}
};

const getUserData = async function (req, res) {
  try{

  let userId = req.params.userId;
  let userDetails = await newUser.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, msg: userDetails })
}
    catch(err){
      res.status(500).send({error:err.message})
    }
};

const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await newUser.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let newUpdatedUser = await newUser.findOneAndUpdate({ _id: userId }, userData, {new:true});
  res.send({ status: true, msg: newUpdatedUser });
}
catch(err){res.status(500).send({msg:err.message})}};

const deleteApi = async function (req, res) {
  try{
  let userId = req.params.userId;
  let userDetails = await newUser.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  let updatedUser = await newUser.findOneAndUpdate(
    { _id: userId },
    { isDeleted: true },
    { new: true }
  );
  res.send({ status: true, data: updatedUser });
} catch(err){res.status(500).send({msg:err.message})}};

module.exports.createNewUser = createNewUser;
module.exports.newUserlogin = newUserlogin;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteApi = deleteApi;
