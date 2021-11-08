module.exports = class ErrorException extends Error {
  constructor(status, message, errors) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static BadRequest(message, errors = []) {
    return new this(400, message, errors);
  }

  static NotFound() {
    return new this(404, "Not found");
  }

  static UnauthorizedError() {
    return new this(401, "User not authorized");
  }

  static ValidationError(errors) {
    return new this(422, "Validation error", errors);
  }
};
