const express = require("express");
const { enrollForm, getFormData, updateForm, deleteData } = require("../../controller/Enroll/Enroll");
const enrollRoute = express.Router();

enrollRoute.post("/create", enrollForm);
enrollRoute.get("/data", getFormData);
enrollRoute.patch("/update/:id", updateForm);
enrollRoute.delete("/delete/:id", deleteData);

module.exports = enrollRoute;
