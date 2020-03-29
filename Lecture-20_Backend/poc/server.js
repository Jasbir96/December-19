const express = require("express");
// server create
const app = express();
const users = require("./data/user.json");
const plans = require("./data/plans.json");
const fs = require("fs");
// 1.middleware
app.use(function f1(req, res, next) {
  console.log("middleware that ran before express.json in f1" + req.body);
  next();
});

// 2.
app.use(express.json());
//3.
app.use(function f2(req, res, next) {
  console.log("middleware that ran after express.json  in f2");
  console.log(req.body);
  next(); 
});
//4
app.post("/api/plans", function(req, res) {
  console.log("Actual function ran")
  const plan = req.body;
  plan.id = plans.length + 1;
  plans.push(plan);
  fs.writeFileSync("./data/plans.json", JSON.stringify(plans));
  res.status(201).json({
    status: "plan created",
    data: plan
  });
});

//getAllplan
app.get("/api/plans", function(req, res) {
  res.status(200).json({
    status: "all plans recieved",
    data: plans
  });
});
//createPlan,
//getPlan
//udpatePlan,
//deletePlan

//user
//createUser
//upateuser
//getAlluser
//getuser
//deletUser
app.listen(3000, function() {
  console.log("Server has started at port 3000");
});
