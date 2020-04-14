const express = require("express");
// server create
const path = require("path");
const app = express();
const userRouter = require("./router/userRouter");
const planRouter = require("./router/planRouter");
const viewRouter = require("./router/viewRouter");
// 1.middleware
// app.use(function f1(req, res, next) {
//   console.log("middleware that ran before express.json in f1" + req.body);
//   next();
// });
// ``````````````````````````````````````Middlewares``````````````````````````````````````
app.use(express.json());
// 1. static folder
app.use(express.static("public"))
// express => rendering /templating engine
app.set("view engine", "pug");
// view => directory
app.set("views", path.join(__dirname, "view"));

app.use("/api/plans", planRouter);
app.use("/api/users", userRouter);
app.use("/", viewRouter);

app.listen(3000, function () {
  console.log("Server has started at port 3000");
});

//3.
// app.use(function f2(req, res, next) {
//   console.log("middleware that ran after express.json  in f2");
//   console.log(req.body);
//   next();
// });
// checkId
