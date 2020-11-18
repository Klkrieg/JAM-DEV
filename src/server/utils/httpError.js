export class HttpError extends Error {
  constructor(statusCode, message) {
    super(message);

    this.statusCode = statusCode;
  }

  static badRequest(message = 'Bad request') {
    return new HttpError(400, message);
  }

  static unauthorized(message = 'Unauthorized') {
    return new HttpError(401, message);
  }

  static forbidden(message = 'Forbidden') {
    return new HttpError(403, message);
  }

  static conflict(message = 'Conflict') {
    return new HttpError(409, message);
  }
}
