import { NextFunction, Request, Response } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  /**
   * (default status 200)
   * Success response
   */
  res.success = (data = {}, code = 200, message = "SUCCESS") => {
    return res.status(code).json({
      code,
      message,
      data,
    });
  };

  /**
   * (default status 400)
   * Custom Error Response
   */
  res.error = (errors = {}, code = 400, message = "FAILED") => {
    return res.status(code).json({
      code,
      message,
      errors,
    });
  };

  /**
   * (status 400)
   * Bad Request Response
   */
  res.badrequest = (errors = {}, message = "BAD REQUEST") => {
    return res.error(errors, 400, message);
  };

  /**
   * (status 401)
   * Unauthorized Response
   */
  res.unauthorized = (errors = {}, message = "UNAUTHORIZED") => {
    return res.error(errors, 401, message);
  };

  /**
   * (status 403)
   * Forbidden Response
   */
  res.forbidden = (errors = {}, message = "FORBIDDEN") => {
    return res.error(errors, 403, message);
  };

  /**
   * (status 500)
   * Internal Server Error Response
   */
  res.internal = (errors = {}, message = "INTERNAL SERVER ERROR") => {
    return res.error(errors, 500, message);
  };

  next();
};
