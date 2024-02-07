import { NextFunction, Request, Response } from "express";

interface Error {
  stack: any;
  message: string;
  status: number;
}

export const handleError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = err.message || "Internal Server Error";
  const status = err.status || 500;

  return res.status(status).json({ success: false, message: message, stack: err.stack });
};
