const express = require("express");
const enrollRoute = require("./Enroll/EnrollRoute");

const allRoutes = express.Router();

allRoutes.use("/enroll", enrollRoute);

module.exports = allRoutes;
