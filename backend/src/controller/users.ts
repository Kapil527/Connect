import { NextFunction, Request, Response } from "express";

import ErrorHandler from "../utils/errorHandler";
import asyncErrorHandler from "../middleware/catchAsyncError";
import User from "../models/userModel";
import { authentication, token, verifyPassword } from "../helper/index";
import {
  NewUserRequestBody,
  LoginRequestBody,
} from "../types/Controllers/usersTypes";

const validatePhoneNumber = (phoneNumber: string): boolean => {
  const phoneNumberRegex = /^\+91[789]\d{9}$/;
  const isValid = phoneNumberRegex.test(phoneNumber);
  return isValid;
};

const usernameValidation = (username: string): boolean => {
  const validCharactersRegex = /^[a-zA-Z0-9_]+$/;
  return validCharactersRegex.test(username);
};

export const signup = asyncErrorHandler(
  async (
    req: Request<{}, {}, NewUserRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { username, phoneNumber, password, image, role } = req.body;

    if (!username || !phoneNumber || !password || !role) {
      return next(new ErrorHandler(400, "Please enter all the details"));
    }

    if (username.length < 3) {
      return next(
        new ErrorHandler(400, "Username should consists atleast 3 charecter")
      );
    } else if (username.length > 50) {
      return next(
        new ErrorHandler(
          400,
          "Username should consists maximum of 20 charecter"
        )
      );
    }

    if (!usernameValidation) {
      return next(
        new ErrorHandler(
          400,
          "Usename should only consists of alphabets, numbers and underscore"
        )
      );
    }

    if (!validatePhoneNumber(phoneNumber)) {
      return next(new ErrorHandler(400, "Please Enter correct phoneNumber"));
    }

    let user = await User.findOne({ phoneNumber });
    if (user) {
      return next(new ErrorHandler(400, "User already exists"));
    }

    if (password.length < 8) {
      return next(
        new ErrorHandler(400, "Password should consists atleast 8 charecter")
      );
    }

    if (role !== "paitent" && role !== "doctor") {
      return next(new ErrorHandler(400, "Please Select correct option"));
    }

    const hashPassword = await authentication(10, password);

    user = await User.create({
      username: username.toLowerCase(),
      phoneNumber,
      password: hashPassword,
      image,
      role,
    });

    const data = {
      user: {
        id: user._id,
      },
    };

    const authtoken = token(data);

    return res.status(201).json({
      success: true,
      message: "Account created successfully",
      authtoken,
      user,
    });
  }
);

export const login = asyncErrorHandler(
  async (
    req: Request<{}, {}, LoginRequestBody>,
    res: Response,
    next: NextFunction
  ) => {
    const { phoneNumber, password } = req.body;

    if (!phoneNumber || !password) {
      return next(new ErrorHandler(400, "Please enter all the details"));
    }

    if (!validatePhoneNumber(phoneNumber)) {
      return next(new ErrorHandler(400, "Please Enter correct phoneNumber"));
    }

    if (password.length < 8) {
      return next(
        new ErrorHandler(400, "Password should consists atleast 8 charecter")
      );
    }

    let user = await User.findOne({ phoneNumber });
    if (!user) {
      return next(new ErrorHandler(400, "User doesn't exists"));
    }

    let usersPassword: string = user.password as string;
    const verifyPass = verifyPassword(password, usersPassword);
    if (!verifyPass) {
      return next(new ErrorHandler(404, "Please enter correct credentionals"));
    }

    const data = {
      user: {
        id: user._id,
      },
    };

    const authtoken = token(data);

    return res.status(200).json({
      success: true,
      authtoken,
      user,
    });
  }
);

export const getUser = asyncErrorHandler(async (req, res, next) => {
  const id = req.body.user;

  const user = await User.findById(id)
    .select(["-password", "-createdAt", "-__v"])
    .lean();

  return res.status(200).json({ success: true, user });
});

export const changePassword = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const userId = req.body.user;
    let { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return next(new ErrorHandler(400, "Please enter correct password"));
    }

    let user = await User.findById(id);
    if (!user) {
      return next(new ErrorHandler(400, "You are not Authorized"));
    }

    if (userId !== user._id.toString()) {
      return next(new ErrorHandler(400, "You are not Authorized"));
    }

    const verifyPass = await verifyPassword(oldPassword, user.password);

    if (verifyPass) {
      return next(new ErrorHandler(400, "Please enter correct password"));
    }

    if (newPassword.length < 8) {
      return next(
        new ErrorHandler(400, "Password should have atleast 8 charecters")
      );
    }

    newPassword = authentication(10, newPassword);

    user = await User.findByIdAndUpdate(
      id,
      { password: newPassword },
      { $new: true }
    );

    const data = {
      user: {
        id: user!._id,
      },
    };

    const authtoken = token(data);

    res.status(200).json({
      success: true,
      message: "Password updated successfully",
      authtoken,
    });
  }
);

export const deleteUser = asyncErrorHandler(async (req, res, next) => {
  const id = req.params.id;
  const userId = req.body.user;

  if (!id || !userId) {
    return next(new ErrorHandler(400, "You are not authorized"));
  }

  let user = await User.findById(id);
  if (!user) {
    return next(new ErrorHandler(400, "User doesn't exists"));
  }

  if (userId !== user._id.toString()) {
    return next(new ErrorHandler(400, "You are not Authorized"));
  }

  await User.findByIdAndDelete(id);

  res.status(200).json({ success: true, message: "Your account deleted" });
});
