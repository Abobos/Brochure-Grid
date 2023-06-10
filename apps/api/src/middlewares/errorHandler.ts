import { NextFunction, Request, Response } from "express";
import { BaseError, InternalServerError, NotFoundError } from "../exceptions";

export const errorHandler = (
  error: BaseError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (!(error instanceof NotFoundError)) {
    console.error(error);

    error = new InternalServerError("Something went wrong");
  }

  res.status(error.code).json({ status: "fail", message: error.message });
};
