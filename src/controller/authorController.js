const authorModel = require("../model/authorModel");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const isValid = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};

//create author api
const createAuthor = async function (req, res) {
  try {
    let data = req.body;
    if (Object.entries(data).length == 0) {
      return res.status(400).send({
        status: false,
        msg: "data should be provided",
      });
    }
    if (isValid(data.fname) == false) {
      return res.send({ msg: "provide valid fname" });
    }
    let isValidFname = validator.isAlpha(data.fname);
    if (isValidFname == false) {
      return res.status(400).send({
        status: false,
        msg: "First Name Should contain only alphabets",
      });
    }
    if (isValid(data.lname) == false) {
      return res.send({ msg: "provide valid lname" });
    }

    let isValidLname = validator.isAlpha(data.lname);
    if (isValidLname == false) {
      return res.status(400).send({
        status: false,
        msg: "last Name Should contain only alphabets",
      });
    }
    if (isValid(data.email) == false) {
      return res.send({ msg: "provide valid email" });
    }
    if (isValid(data.password) == false) {
        return res.send({ msg: "provide valid password" });
    }
    if (isValid(data.title) == false) {
        return res.send({ msg: "provide valid title" });
    }

    let isValidEmail = validator.isEmail(data.email);
    if (isValidEmail == false) {
      return res.status(400).send({
        status: false,
        msg: "plz enter valid email",
      });
    }
    let saveData = await authorModel.create(data);
    res.status(200).send({
      msg: saveData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      msg: err.message,
    });
  }
};

///login api//
const login = async function (req, res) {
  try {
    const data = req.body;

    if (!data.email) {
      return res.status(400).send({
        status: false,
        msg: "Email is mandatory",
      });
    }

    if (!data.password) {
      return res.status(400).send({
        status: false,
        msg: "Password is mandatory",
      });
    }
    let isValidEmail = validator.isEmail(data.email);
    if (isValidEmail == false) {
      return res.status(400).send({
        status: false,
        msg: "plz enter valid email",
      });
    }
    const user = await authorModel.findOne({
      email: data.email,
    });

    if (!user) {
      return res.status(404).send({
        status: false,
        msg: "User not found",
      });
    }

    if (user.password != data.password) {
      return res.status(404).send({
        status: false,
        msg: "Plz enter correct password",
      });
    }

    const token = jwt.sign(
      {
        email: user.email,
        password: user.password,
        authorId: user["_id"],
      },
      "project-blog team 67"
    );

    return res.status(200).send({
      status: true,
      msg: { token: token },
    });
  } catch (err) {
    return res.status(500).send({
      status: true,
      msg: err.message,
    });
  }
};

module.exports = {
  createAuthor,
  login,
  isValid
};
