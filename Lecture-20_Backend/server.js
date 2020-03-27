const express = require("express");
const app = express();
const users = require("./data/user.json");
const plans = require("./data/plans.json");
const fs = require("fs");
// plans=> create ,read,update,delete
// getAllplans
// http packet => data =>  req.body
// inbuilt middleware
app.use(express.json());
// getAllplans
app.get("/api/plans", function(req, res) {
  res.status(200).json({
    success: "got all users",
    data: plans
  });
});

// createplan,
app.post("/api/plans", function(req, res) {
  const plan = req.body;

  plan.id = plans.length + 1;
  plans.push(plan);

  fs.writeFileSync("./data/plans.json", JSON.stringify(plans));
  res.status(201).json({
    success: "plan created successfully"
  });
});

// get a particular plan
// /api/plans/3
// /api/plans/2

app.get("/api/plans/:id", function(req, res) {
  {id:3}
  console.log(req.params);
  res.status(200).json({
    success: "response received successfully"
  });
});
// update plan
app.patch()
// getallplans
//updateplan
//deleteplan

// users=> create ,read,update,delete
app.listen(3000, function() {
  console.log("Server has started at port 3000");
});
