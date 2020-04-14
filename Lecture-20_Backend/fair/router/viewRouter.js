const viewRouter = require("express").Router();
const { getTrialPage,getHomePage } = require("../controller/viewController");
viewRouter.get("/",getHomePage)
viewRouter.get("/trial", getTrialPage);

module.exports = viewRouter;