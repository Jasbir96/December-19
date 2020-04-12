const userModel = require("../model/userModel");
module.exports.createUser = function createUser(req, res) {
  console.log("Actual function ran");
  const user = req.body;
  user.id = plans.length + 1;
  users.push(user);
  fs.writeFileSync("./data/users.json", JSON.stringify(users));
  res.status(201).json({
    status: "user created",
    data: user,
  });
};

module.exports.getAllUser = async function getAllUser(req, res) {
  // findone => 
  // find => city 
  // find=> model => document
const users= await userModel.find().select("+password");
  res.status(200).json({
    status: "all users recieved",
    data: users,
  });
};

module.exports.getUser = async function getUser(req, res) {
  const id = req.params.id || req.id;
  // console.log
  // console.log(id)
  const user = await userModel.findById(id)
  res.json({
    status: "successfull",
    user
  });
};
module.exports.updateUser = function updateUser(req, res) {
  const id = req.params.id;
  const originaluser = users[id - 1];
  const toupdateData = req.body;
  const keys = [];
  for (let key in toupdateData) {
    keys.push(key);
  }
  for (let i = 0; i < keys.length; i++) {
    originaluser[keys[i]] = toupdateData[keys[i]];
  }
  fs.writeFileSync("./data/users.json", JSON.stringify(users));

  res.status(200).json({
    status: "update request recieved",
    data: originaluser,
  });
};
module.exports.deleteUser = function deleteUser(req, res) {
  const { id } = req.params;
  const user = users.splice(id - 1, 1);
  fs.writeFileSync("./data/plans.json", JSON.stringify(users));
  res.status(200).json({
    status: "user Deleted",
    data: user,
  });
};
