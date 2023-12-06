const express = require("express");
const loginController = require("../../controller/Admin/Login");
const userLogoutController = require("../../controller/Admin/Logout");
const adminRouter = express.Router();

adminRouter.post("/login", loginController);
adminRouter.post("/logout", userLogoutController);

module.exports = adminRouter;
