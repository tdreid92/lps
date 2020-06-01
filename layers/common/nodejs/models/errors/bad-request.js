class BadRequestError {
  constructor(stackTrace) {
    this.statusCode = 400;
    this.stackTrace = stackTrace;
    this.errorName = "BadRequest";
  }
  getStatusCode() {
    return this.statusCode;
  }

  getStackTrace() {
    return this.stackTrace;
  }

  getErrorName() {
    return this.errorName;
  }
}

module.exports = BadRequestError;
