const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");
async function signup(req, res) {
  try {
    const newUser = await userModel.create(req.body);
    res.status(201).json({
      status: "user Signedup",
      newUser,
    });
  } catch (err) {
    res.status(500).json({
      status: "user can't be created",
      err,
    });
  }
}
// token create
// payload => user id
async function login(req, res) {
  try {
    if (req.body.email && req.body.password) {
      // find user
      const user = await userModel
        .findOne({ email: req.body.email })
        .select("+password");
      if (user) {
        // console.log(user);
        if (user.password == req.body.password) {
          const id = user["_id"];
          const token = jwt.sign({ id }, secrets.JWT_SECRET);
       return   res.status(200).json({
            status: "userLogged In",
            user,
            token,
          });
        } else {
          throw new Error("email or password didn't match ");
        }
      } else {
        throw new Error("User not found");
      }
    }

    throw new Error("Invalid Input");
  } catch (err) {
    // console.log(err);
    return res.status(500).json({
      status: "user can't be loggedIn",
      err,
    });
  }
}
// It verifies
async function protectRoute(req, res, next) {
  try {
    if (req.body.token) {
      const cToken = req.body.token;
      const payload = jwt.verify(cToken, secrets.JWT_SECRET);
      if (payload) {
        next();
      } else {
        throw new Error("Token is modified please login again");
      }
    } else {
      throw new Error("Please login first");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err,
    });
  }
}
module.exports.login = login;
module.exports.signup = signup;
module.exports.protectRoute = protectRoute;
