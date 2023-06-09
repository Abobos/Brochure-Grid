export class BaseError extends Error {
  constructor(public code: number, public message: string) {
    super(message);

    // restore prototype chain since we are extending the built-in Error class
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class NotFoundError extends BaseError {
  constructor(message: string) {
    super(404, message);
    this.name = NotFoundError.name;
  }
}

export class InternalServerError extends BaseError {
  constructor(message: string) {
    super(500, message);
    this.name = InternalServerError.name;
  }
}
