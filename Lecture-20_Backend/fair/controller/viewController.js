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
module.exports.getTrialPage = getTrialPage;
module.exports.getHomePage = getHomePage;