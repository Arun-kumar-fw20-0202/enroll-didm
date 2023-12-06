const express = require("express");
const enrollRoute = require("./Enroll/EnrollRoute");
const adminRouter = require("./Admin/router");
const isAuth = require("../middleware/isAuth");

const allRoutes = express.Router();

allRoutes.use("/enroll", enrollRoute);
allRoutes.use("/admin", adminRouter);

module.exports = allRoutes;
