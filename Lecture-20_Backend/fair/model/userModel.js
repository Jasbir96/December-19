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
    console.log("userDB connected");
  })
  .catch(function (err) {
    console.log(err);
  });

// sch
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 7,
    required: true,
    select: false,
  },
  confirmPassword: {
    type: String,
    minlength: 7,
    validate: function () {
      return this.password == this.confirmPassword;
    },
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user", "owner", "delivery Boy"],
    default: "user",
  },
});

// hooks
userSchema.pre("save", function () {
  // db => confirmpassword
  this.confirmPassword = undefined;
});
const userModel = mongoose.model("NewUserModel", userSchema);

module.exports = userModel;
