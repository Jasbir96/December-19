const express = require("express");
// server create
const app = express();
const userRouter=require("./router/userRouter");
const planRouter=require("./router/planRouter");
// 1.middleware
// app.use(function f1(req, res, next) {
  //   console.log("middleware that ran before express.json in f1" + req.body);
  //   next();
  // });
  
  // ``````````````````````````````````````Middlewares``````````````````````````````````````
app.use(express.json());
app.use("/api/plans", planRouter);
app.use("/api/users", userRouter);

app.listen(3000, function() {
  console.log("Server has started at port 3000");
});

//3.
// app.use(function f2(req, res, next) {
//   console.log("middleware that ran after express.json  in f2");
//   console.log(req.body);
//   next();
// });
// checkId
