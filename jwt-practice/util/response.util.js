const Response = (res, statusCode, isSuccessful, message, data) => {
  return res.status(statusCode).json({
    isSuccessful,
    timestamp: new Date().toISOString(),
    message,
    data,
  });
};

module.exports = Response;
