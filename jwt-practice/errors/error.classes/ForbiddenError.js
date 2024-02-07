const CustomAPIError = require("./CustomApiError");
const { StatusCodes } = require("http-status-codes");

class ForbiddenError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

module.exports = ForbiddenError;
