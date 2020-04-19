const planModel = require("../model/planModel");
function getTrialPage(req, res) {
  res.render("trial.pug", {
    titleofThePage: "Trial Page"
  })
}
function getHomePage(req, res) {
  res.render("home.pug", {
    title: "Home Page"
  })
}
// 
async function getPlansPage(req, res) {
  // planModel =>get  plans 
  let plans = await planModel.find();
  res.render("plansPage.pug", {
    title: "Plans Page", plans
  })
}
function getLoginPage(req, res) {
  res.render("login.pug", {
    title: "Login"
  })
}
module.exports.getTrialPage = getTrialPage;
module.exports.getHomePage = getHomePage;
module.exports.getPlansPage = getPlansPage;
module.exports.getLoginPage = getLoginPage;