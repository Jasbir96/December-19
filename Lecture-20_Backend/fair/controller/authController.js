const userModel = require("../model/userModel");

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

async function login(req, res) {
  try {
    if (req.body.email && req.body.password) {
      // find user
      const user = await userModel.findOne({ email: req.body.email });
      if (user) {
        if (user.password == req.body.password) {
          res.status(200).json({
            status: "userLogged In",
            user,
          });
        } else {
          throw new Error("email or password didn't");
        }
      } else {
        throw new Error("User not found");
      }
    }
    throw new Error("Invalid Input");
  } catch (err) {
    res.status(500).json({
      status: "user can't be loggedIn",
      err,
    });
  }
}
module.exports.login = login;
module.exports.signup = signup;
