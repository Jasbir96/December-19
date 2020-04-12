const express = require("express");
// server create
const app = express();
// const userRouter = require("./mvc/controller/router/userRouter");
// const planRouter = require("./mvc/controller/router/planRouter");
// 1.middleware
// app.use(function f1(req, res, next) {
//   console.log("middleware that ran before express.json in f1" + req.body);
//   next();
// });

// ``````````````````````````````````````Middlewares``````````````````````````````````````
// app.use(express.json());
// app.use("/api/plans", planRouter);
// app.use("/api/users", userRouter);

// app.get("/protect", function (req, res) {
//   console.log(req.headers);
// res.json({
//   data:req.headers
// })
// })
console.log("Server file is executed");
// route => fnhandler

app.get("", isAuthorized(["admin"]))

app.get("/createPlan", isAuthorized(["admin", "resturantowner"]))
function isAuthorized(role) {
  console.log("fnhandler ran");
  // return 5;
  return function (req, res) {
    let data;
    if (role.includes("resturantowner") == true) {
      data = "called for createPlan"
    } else {
      data = " called for "
    }
    // console.log("I was inside fnhandler");
    res.json({
      data
    })
  }
  // res.json({
  //   data: "fnhandler ran"
  // })
}

app.listen(4000, function () {
  console.log("Server has started at port 4000");
});

//3.
// app.use(function f2(req, res, next) {
//   console.log("middleware that ran after express.json  in f2");
//   console.log(req.body);
//   next();
// });
// checkId
