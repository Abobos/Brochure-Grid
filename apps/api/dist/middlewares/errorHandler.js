"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const exceptions_1 = require("../exceptions");
const errorHandler = (error, _req, res, _next) => {
    if (error.name === "Error") {
        console.error(error);
        error = new exceptions_1.InternalServerError("Something went wrong");
    }
    res.status(error.code).json({ status: "fail", message: error.message });
};
exports.errorHandler = errorHandler;
