const express = require("express");
const Student = require("../model/student.model");
const Response = require("../utils/response");
const {
  GetAllStudents,
  GetSpecificStudent,
  CreateStudent,
  UpdateStudent,
  DeleteUserFromDB,
  DeleteUserByID,
} = require("../controller/student.controller");

const StudentRouter = express.Router();

StudentRouter.post("/register", CreateStudent);
StudentRouter.get("/get-all", GetAllStudents);
StudentRouter.get("/get-student/:id", GetSpecificStudent);
StudentRouter.put("/update-student/:id", UpdateStudent);
StudentRouter.delete("/delete-student/:id", DeleteUserFromDB);
StudentRouter.put("/delete-student/:id", DeleteUserByID);

module.exports = StudentRouter;
