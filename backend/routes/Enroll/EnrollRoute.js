const express = require("express");
const { enrollForm } = require("../../controller/Enroll/Enroll");
const enrollRoute = express.Router();

enrollRoute.post("/create", enrollForm);

module.exports = enrollRoute;
