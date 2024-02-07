const Response = require("../util/response.util");
const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = async (err, req, res, next) => {
  if (err.statusCode == StatusCodes.NOT_FOUND) {
    return Response(res, StatusCodes.NOT_FOUND, false, err.message, null);
  }

  if (err.statusCode == StatusCodes.UNAUTHORIZED) {
    return Response(res, StatusCodes.UNAUTHORIZED, false, err.message, null);
  }

  if (err.statusCode == StatusCodes.FORBIDDEN) {
    return Response(res, StatusCodes.FORBIDDEN, false, err.message, null);
  }

  if (err.statusCode == StatusCodes.BAD_REQUEST) {
    return Response(res, StatusCodes.BAD_REQUEST, false, err.message, null);
  }

  if (err.name == "ValidationError") {
    let validatorKyeValuePairs = {};

    Object.keys(err.errors).forEach((key) => {
      validatorKyeValuePairs[key] = err.errors[key].message;
    });

    return Response(
      res,
      StatusCodes.BAD_REQUEST,
      false,
      "Data Validation errors",
      validatorKyeValuePairs
    );
  }

  // handle mongo db duplicate value errors
  if (err.code && err.code === 11000) {
    return Response(
      res,
      StatusCodes.BAD_REQUEST,
      false,
      `${Object.keys(
        err.keyValue
      )} already exists! Please choose another value.`,
      {}
    );
  }

  // handle mongo db cast errors
  if (err.name === "CastError") {
    return Response(
      res,
      StatusCodes.BAD_REQUEST,
      false,
      `No item found with ID "${err.value}"!`,
      {}
    );
  }
};

module.exports = errorHandlerMiddleware;
