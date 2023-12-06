const express = require("express");
const { enrollForm, getFormData, updateForm, deleteData } = require("../../controller/Enroll/Enroll");
const isAuth = require("../../middleware/isAuth");
const enrollRoute = express.Router();

enrollRoute.post("/create", enrollForm);
enrollRoute.get("/data", isAuth, getFormData);
enrollRoute.patch("/update/:id", isAuth, updateForm);
enrollRoute.delete("/delete/:id", isAuth, deleteData);

module.exports = enrollRoute;
