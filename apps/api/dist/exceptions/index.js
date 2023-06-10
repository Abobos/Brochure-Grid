"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.NotFoundError = exports.BaseError = void 0;
class BaseError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
        this.message = message;
        // restore prototype chain since we are extending the built-in Error class
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.BaseError = BaseError;
class NotFoundError extends BaseError {
    constructor(message) {
        super(404, message);
        this.name = NotFoundError.name;
    }
}
exports.NotFoundError = NotFoundError;
class InternalServerError extends BaseError {
    constructor(message) {
        super(500, message);
        this.name = InternalServerError.name;
    }
}
exports.InternalServerError = InternalServerError;
