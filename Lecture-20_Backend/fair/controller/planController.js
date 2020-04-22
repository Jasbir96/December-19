// const plans=require("../model/plans.json");
const planModel = require("../model/planModel");
// 1. 
module.exports.createPlan = async function createPlan(req, res) {
  //  json
  // console.log("Actual function ran");
  const recievedPlan = req.body;
  try {
    let createdPlan = await planModel.create(recievedPlan);
    // send success response to client
    res.status(201).json({
      status: "plan created",
      data: createdPlan,
    });
  } catch (err) {
    res.status(501).json({
      err,
      status: "Internal server error",
    });
  }

  // plan.id = plans.length + 1;
  // plans.push(plan);
  // fs.writeFileSync("./data/plans.json", JSON.stringify(plans));
  //  db
  // promise
  // planModel
  //   .create(recievedPlan)
  //   .then(function (createdPlan) {
  //     console.log(createdPlan);
  //     res.status(201).json({
  //       status: "plan created",
  //       data: plan,
  //     });
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //     res.status(501).json({
  //       status: "Server error",
  //     });
  //   });
};

// homework
module.exports.getAllPlans = function getAllplans(req, res) {
  res.status(200).json({
    status: "all plans recieved",
    data: plans,
  });
};
// done
module.exports.getPlan = async function getPlan(req, res) {
  try {
    // recieve id through params
    const { id } = req.params;
    const plan = await planModel.findById(id);
    res.json({
      status: "successfull",
      data: plan,
    });
  } catch (err) {
    res.status(404).json({
      status: "Plan Not found",
      err,
    });
  }
};
// updatePlan
module.exports.updatePlan = async function updatePlan(req, res) {
  //  identifier => plan
  // const originalPlan = plans[id - 1];
  //fields to be updated in ur plan
  // local
  try {
    const id = req.params.id;
    const toupdateData = req.body;
    // mdb=> express server
    const originalPlan = await planModel.findById(id);
    const keys = [];
    for (let key in toupdateData) {
      keys.push(key);
    }

    // express server => modify
    for (let i = 0; i < keys.length; i++) {
      originalPlan[keys[i]] = toupdateData[keys[i]];
    }
    // express server=> modified=> mdb
   const updatedPlan= await originalPlan.save();

    // fs.writeFileSync("./data/plans.json", JSON.stringify(plans));
    // db********************************************************
    // update DB update =>old plan return
    res.status(200).json({
      status: "update request recieved",
      plan: updatedPlan,
    });
  } catch (err) {
    console.log(err);
    res.status(501).json({
      status: "Plan could not be updated",
      err,
    });
  }
};
// homework
module.exports.deletePlan = function deletePlan(req, res) {
  const { id } = req.params;
  const plan = plans.splice(id - 1, 1);
  fs.writeFileSync("./data/plans.json", JSON.stringify(plans));
  res.status(200).json({
    status: "Plan Deleted",
    plan: plan,
  });
};

