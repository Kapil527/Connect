import { Request, Response, NextFunction } from "express";

import Doctor from "../models/doctorModel";
import ErrorHandler from "../utils/errorHandler";
import asyncErrorHandler from "./catchAsyncError";
import {
  AppointmentCheck,
  AppointmentCheckArray,
} from "types/Controllers/doctorsType";

// Checks weather appointment already exists on the given date and time
const checkAppointments = (
  existingDates: AppointmentCheckArray,
  availableHour: AppointmentCheck
) => {
  const isAppointmentExistsOnDate = existingDates.filter(
    (dates) => dates.date.toString() === availableHour.date.toString()
  );

  let appointmentExists;
  if (isAppointmentExistsOnDate.length > 0) {
    appointmentExists = isAppointmentExistsOnDate.filter((dates) => {
      return (
        (dates.startTime.toString() === availableHour.startTime.toString() &&
          dates.endTime.toString() === availableHour.endTime.toString()) ||
        (dates.startTime.toString() <= availableHour.endTime.toString() &&
          dates.startTime.toString() >= availableHour.startTime.toString()) ||
        (dates.endTime.toString() >= availableHour.startTime.toString() &&
          dates.endTime.toString() <= availableHour.endTime.toString())
      );
    });
  }
  return appointmentExists;
};

// middleware that checks weather the appointmnet matches the criteria or not.
export const appoinmentChecking = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const doctorId = req.params.id;
    const userId = req.body.user;
    const { date, startTime, endTime, noOfAppointments } = req.body;

    if (!doctorId) {
      return next(new ErrorHandler(400, "Unauthorized"));
    }

    let doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return next(new ErrorHandler(400, "Unauthorized"));
    }

    if (userId !== doctor.userId?.toString()) {
      return next(new ErrorHandler(400, "Unauthorized"));
    }

    if (!date || !startTime || !endTime || !noOfAppointments) {
      return next(new ErrorHandler(400, "Please Enter all the details"));
    }

    const availableHour = {
      date: new Date(`${date}T00:00:00Z`),
      startTime: new Date(`${date}T${startTime}`),
      endTime: new Date(`${date}T${endTime}`),
      noOfAppointments
    };

    if (availableHour.endTime <= availableHour.startTime) {
      return next(
        new ErrorHandler(400, "Start time should be smaller then End Time")
      );
    }

    const today = new Date();
    if (req.method === "POST") {
      if (today.getTime() > availableHour.startTime.getTime()) {
        return next(
          new ErrorHandler(400, "Appoinment cannot be created at past date")
        );
      }
    }

    //sending dates to checkAppointments to check weather the appointment exists or not.
    const appointmentExists = checkAppointments(
      doctor.availableHours,
      availableHour
    );

    if (req.method === "POST") {
      if (appointmentExists !== undefined && appointmentExists.length > 0) {
        return next(
          new ErrorHandler(400, "Appointment already exists on this time")
        );
      } else {
        req.body.availableHour = availableHour;
      }
    }

    if (req.method === "DELETE") {
      if (appointmentExists === undefined) {
        return next(
          new ErrorHandler(400, "Appointment doesn't exists on this time")
        );
      } else {
        req.body.appointment = appointmentExists;
      }
    }
    next();
  }
);
