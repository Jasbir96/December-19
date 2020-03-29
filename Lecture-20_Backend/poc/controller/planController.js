const plans=require("../model/plans.json");

module.exports.createPlan = function createPlan(req, res) {
  console.log("Actual function ran");
  const plan = req.body;
  plan.id = plans.length + 1;
  plans.push(plan);
  fs.writeFileSync("./data/plans.json", JSON.stringify(plans));
  res.status(201).json({
    status: "plan created",
    data: plan
  });
};
module.exports.getAllPlans = function getAllplans(req, res) {
  res.status(200).json({
    status: "all plans recieved",
    data: plans
  });
};
module.exports.getPlan = function getPlan(req, res) {
  const { id } = req.params;
  res.json({
    status: "successfull",
    data: plans[id - 1]
  });
};
module.exports.updatePlan = function updatePlan(req, res) {
  const id = req.params.id;
  const originalPlan = plans[id - 1];
  const toupdateData = req.body;
  const keys = [];
  for (let key in toupdateData) {
    keys.push(key);
  }
  for (let i = 0; i < keys.length; i++) {
    originalPlan[keys[i]] = toupdateData[keys[i]];
  }
  fs.writeFileSync("./data/plans.json", JSON.stringify(plans));

  res.status(200).json({
    status: "update request recieved",
    plan: originalPlan
  });
};
module.exports.deletePlan = function deletePlan(req, res) {
  const { id } = req.params;
  const plan = plans.splice(id - 1, 1);
  fs.writeFileSync("./data/plans.json", JSON.stringify(plans));
  res.status(200).json({
    status: "Plan Deleted",
    plan: plan
  });
};
