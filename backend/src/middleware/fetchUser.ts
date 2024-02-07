import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

import asyncErrorHandler from "./catchAsyncError";
import ErrorHandler from "../utils/errorHandler";

dotenv.config();
const JWT_SECRET = process.env.JWTSECRET;

export const fetchUser = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const userId = req.headers["authorization"] as string;

    const token = userId.split("Bearer ")[1];

    if (!token) {
      return next(new ErrorHandler(400, "Invalid Token"));
    }

    const data = jwt.verify(token, JWT_SECRET as string) as JwtPayload;
    if (!data) {
      return next(new ErrorHandler(400, "Invalid Token"));
    }

    req.body.user = data.user.id;

    next();
  }
);
