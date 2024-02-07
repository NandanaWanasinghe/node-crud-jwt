const Student = require("../model/student.model");
const Response = require("../utils/response");

const GetAllStudents = async (req, res) => {
  const allStudents = await Student.find();

  return Response(res, 200, true, "", allStudents);
};

const GetSpecificStudent = async (req, res) => {
  const studentId = req.params.id;

  // const student = await Student.findOne({
  //   _id: studentId,
  // });

  const student = await Student.findById(studentId);

  // const student = await Student.find({
  //   _id: studentId,
  // });

  console.log(student);

  if (student) {
    return Response(res, 200, true, "", student);
  }
};

const CreateStudent = async (req, res) => {
  const body = req.body;

  const isEmailCheck = await Student.find({
    email: body.email,
  });

  if (isEmailCheck.length > 0) {
    return Response(res, 400, false, "Email already used..!", {});
  }

  const newBody = {
    firstName: body.fName,
    lastName: body.lName,
    email: body.email,
    mobileNumbers: body.mobileNo,
  };

  //   const newStudent = new Student(newBody);
  //   const createdUser = await newStudent.save();

  const createdUser = await Student.create(newBody);

  if (createdUser) {
    // return res.status(201).send({
    //   isSuccessful: true,
    //   code: 201,
    //   message: "User Created!",
    //   data: createdUser,
    // });
    return Response(res, 201, true, "User Created..!", createdUser);
  } else {
    // return res.status(500).send({
    //   isSuccessful: false,
    //   code: 201,
    //   message: "Failed to create User!",
    //   data: createdUser,
    // });
    return Response(res, 500, false, "Failed to create User..!", createdUser);
  }
};

const UpdateStudent = async (req, res) => {
  //findByIdAndUpdate
  // save
  const studentId = req.params.id;
  const request = req.body;
  const user = await Student.findById(studentId);

  if (user) {
    user.firstName = request.fName;
    user.lastName = request.lName;
    user.degree = request.degree;

    const updatedStudent = await Student.findByIdAndUpdate(studentId, user);
    return Response(res, 200, true, "User Updated!", updatedStudent);
  } else {
    return Response(res, 404, false, "User Not found!", null);
  }
};

const DeleteUserFromDB = async (req, res) => {
  const studentId = req.params.id;
  const user = await Student.findById(studentId);

  if (user) {
    const deletedUser = await Student.findByIdAndDelete(studentId);

    return Response(res, 200, true, "User Deleted!", deletedUser);
  } else {
    return Response(res, 404, false, "User Not found!", null);
  }
};

const DeleteUserByID = async (req, res) => {
  //findByIdAndUpdate
  // save
  const studentId = req.params.id;

  const user = await Student.findById(studentId);

  if (user) {
    const deletedUSer = await Student.findByIdAndUpdate(studentId, {
      studentStatus: 3,
    });
    return Response(res, 200, true, "User Deleted!", deletedUSer);
  } else {
    return Response(res, 404, false, "User Not found!", null);
  }
};

module.exports = {
  GetAllStudents,
  GetSpecificStudent,
  CreateStudent,
  UpdateStudent,
  DeleteUserByID,
  DeleteUserFromDB,
};
