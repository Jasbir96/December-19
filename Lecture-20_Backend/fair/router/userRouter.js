const userRouter = require("express").Router();
const { signup, login, protectRoute, isAuthorized,forgetPassword,resetPassword } = require("../controller/authController");
const { getUser,getAllUser,updateUser,deleteUser } = require("../controller/userController");
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
userRouter.patch("/forgetPassword",forgetPassword)
userRouter.patch("/resetPassword/:token",resetPassword)
// profile page 


userRouter.use(protectRoute)
userRouter.get("/userProfile" , getUser);
// isAuthorized
// admin
userRouter.use(isAuthorized(["admin"]));
userRouter.route("").get(getAllUser);
userRouter
  .route("/:id")
  .patch(updateUser)
  .delete(deleteUser);
module.exports = userRouter;
