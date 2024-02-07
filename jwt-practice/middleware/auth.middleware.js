const ForbiddenError = require("../errors/error.classes/ForbiddenError");
const UnauthorizedError = require("../errors/error.classes/UnauthorizedError");
const helperUtil = require("../util/helper.util");
const jwt = require("jsonwebtoken");
const authorize = (roleArray) => {
  if (!roleArray) {
    roleArray = [];
  }

  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    const SECRET = process.env.JWT_SECRET;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new UnauthorizedError("Authentication Invalid!");
    }

    const token = helperUtil.extractToken(authHeader);

    if (token) {
      let payload = null;

      try {
        payload = jwt.verify(token, SECRET);
      } catch (e) {
        if (e instanceof jwt.TokenExpiredError)
          throw new UnauthorizedError("Token Expired!");

        return next(
          new ForbiddenError("You're unauthorized to access this resource!")
        );
      }

      if (roleArray.length && !roleArray.includes(payload.role)) {
        return next(
          new ForbiddenError("You're unauthorized to access this resource!")
        );
      }

      req.auth = payload;
      return next();
    } else {
      throw new UnauthorizedError(
        "You're unauthorized to access this resource!"
      );
    }
  };
};

module.exports = { authorize };
