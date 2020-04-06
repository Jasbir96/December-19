const userRouter = require("express").Router();
const { signup } = require("../controller/authController");
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

module.exports = userRouter;
