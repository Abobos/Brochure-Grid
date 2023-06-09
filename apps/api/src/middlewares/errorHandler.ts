import { NextFunction, Request, Response } from "express";
import { BaseError, InternalServerError } from "../exceptions";

export const errorHandler = (
  error: BaseError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (error.name === "Error") {
    console.error(error);

    error = new InternalServerError("Something went wrong");
  }

  res.status(error.code).json({ status: "fail", message: error.message });
};
