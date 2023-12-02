const express = require("express");
const { enrollForm } = require("../controller/Enroll/Enroll");
const allRoutes = express.Router();

allRoutes.use("/enroll", enrollForm);

module.exports = allRoutes;
