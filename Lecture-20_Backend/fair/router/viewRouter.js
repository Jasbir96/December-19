const viewRouter = require("express").Router();
const { getTrialPage, getHomePage, getPlansPage, getLoginPage } = require("../controller/viewController");
viewRouter.get("/", getHomePage)
viewRouter.get("/plans", getPlansPage)
viewRouter.get("/login", getLoginPage);
viewRouter.get("/trial", getTrialPage);

module.exports = viewRouter;