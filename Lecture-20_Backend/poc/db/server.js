const express = require("express");
const app = express();
// mongoose
const mongoose = require("mongoose");
// mongoose => promise based library
// connection
mongoose
  .connect(
    "mongodb+srv://admin:1234abc@cluster0-ufy4c.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
  )
  .then(function (db) {
    // console.log(db);
    console.log("Database is connected");
  })
  .catch(function (err) {
    console.log(err);
  });

// define schema
let userSchema = new mongoose.Schema({
  name: String,
  email: String,
});
// define models
const userModel = mongoose.model("DemoUserModel", userSchema);
// DemoUserModel
const newUser = new userModel({
  name: "Steve",
  email: "abc@gmail.com",
  phno: 123456,
});

// save call => express server=> mongodb server
newUser
  .save()
  .then(function () {
    console.log("A user is saved in demousermodels ");
  })
  .catch(function (err) {
    console.log(err);
  });
app.listen(3000, function () {
  console.log("App is listening at port 3000");
});
