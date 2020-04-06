const userRouter = require("express").Router();
const { signup, login, protectRoute } = require("../controller/authController");
const { getMe } = require("../controller/userController");
// ///////////////////////////JSON
// const {
//   getAllUser,
//   getUser,
//   updateUser,
//   deleteUser
// } = require("../controller/userController");
// const {checkId} = require("../utility/utilityfn");
// userRouter
//   .route("")
//   .get(getAllUser)
//   .post(checkbody, createUser);

// userRouter
//   .route("/:id")
//   .get(getUser)
//   .patch(updateUser)
//   .delete(deleteUser);
// /////////////////////DB//////////////////////
userRouter.post("/signup", signup);
userRouter.post("/login", login);

userRouter.post("/getMe", protectRoute, getUser);
module.exports = userRouter;
