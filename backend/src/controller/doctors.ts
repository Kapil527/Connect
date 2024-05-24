import { Request, Response, NextFunction } from "express";

import Doctor from "../models/doctorModel";
import User from "../models/userModel";
import asyncErrorHandler from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/errorHandler";
import { UpdateDoctorDetailsBody } from "../types/Controllers/doctorsType";

export const createDoctorProfile = asyncErrorHandler(async (req, res, next) => {
  const userId = req.body.user;
  let { education, experience, category, price } = req.body;

  if (!education || !category || !price) {
    return next(new ErrorHandler(400, "Please enter your education"));
  }

  const user = await User.findById(userId);
  if (!user) {
    return next(new ErrorHandler(400, "Invalid Authentication"));
  }
  if (user.role !== "doctor") {
    return next(new ErrorHandler(400, "You are unauthorized"));
  }

  education = education.toLowerCase();
  experience ? experience.toLowerCase() : "";
  category = category.toLowerCase();

  const doctor = await Doctor.create({
    userId,
    education,
    experience,
    specialization: { category, price },
  });

  res.status(201).json({
    success: true,
    message: "Your details have been added successfully",
    doctor,
  });
});

export const updateDetails = asyncErrorHandler(async (req, res, next) => {
  const { education, experience, category, price } = req.body;
  const doctorId = req.params.id;
  const userId = req.body.user;

  if (!doctorId || !userId) {
    return next(new ErrorHandler(400, "Unauthorized Id or token"));
  }
  let doctor = await Doctor.findById(doctorId);
  if (!doctor) {
    return next(new ErrorHandler(400, "Doctor doesn't exists"));
  }
  if (userId !== doctor.userId.toString()) {
    return next(new ErrorHandler(400, "Unauthorized Id or token"));
  }

  const newDetails: UpdateDoctorDetailsBody = {};
  if (education) {
    newDetails.education = education;
  }
  if (experience) {
    newDetails.experience = experience;
  }
  if (price) {
    newDetails.price = price;
  }
  if (category) {
    newDetails.category = category;
  }

  doctor = await Doctor.findByIdAndUpdate(
    doctor,
    { $set: newDetails },
    { new: true }
  );

  res
    .status(200)
    .json({ success: true, message: "Details updated successfully", doctor });
});

export const getDetails = asyncErrorHandler(async (req, res, next) => {
  const doctorId = req.params.id;
  const userId = req.body.user;

  if (!doctorId || !userId) {
    return next(new ErrorHandler(400, "Unauthorized Id or token"));
  }
  let doctor = await Doctor.findById(doctorId).select(["-_id", "-userId"]);
  if (!doctor) {
    return next(new ErrorHandler(400, "Doctor doesn't exists"));
  }
  if (userId !== doctor.userId.toString()) {
    return next(new ErrorHandler(400, "Unauthorized Id or token"));
  }

  res.status(200).json({success: true, doctor})
})