const Response = (res, statusCode, isSuccessful, message, data) => {
  return res.status(statusCode).send({
    isSuccessful,
    code: statusCode,
    timeStamp: new Date().toISOString(),
    message,
    data,
  });
};

module.exports = Response;
