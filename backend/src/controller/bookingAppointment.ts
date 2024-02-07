import { Request, Response, NextFunction } from "express";

import User from "../models/userModel";
import Doctor from "../models/doctorModel";
import Appointments from "../models/appointmentModel";
import asyncErrorHandler from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/errorHandler";

// It is a post method which is used to book an appointment
export const bookAppointment = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const doctorId = req.params.id;
    const userId = req.body.user;
    const { paitentName, age, specilaize, disease, date, startTime, endTime } =
      req.body;

    if (!doctorId || !userId) {
      return next(new ErrorHandler(400, "Unauthorized Id or token"));
    }
    if (
      !paitentName ||
      !age ||
      !specilaize ||
      !disease ||
      !date ||
      !startTime ||
      !endTime
    ) {
      return next(new ErrorHandler(400, "Please Enter all the details"));
    }

    let user = await User.findById(userId);
    if (!user) {
      return next(new ErrorHandler(400, "Invalid token"));
    }

    let doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return next(new ErrorHandler(400, "Doctor dosen't Exists"));
    }

    // converting date, startTime, endTime form String to Date Formate
    const appointmentBooking = {
      date: new Date(`${date}T00:00:00Z`),
      startTime: new Date(`${date}T${startTime}`),
      endTime: new Date(`${date}T${endTime}`),
    };

    //getting appointment timimgs from the doctors availableHours
    let isAppointmentExists = doctor.availableHours.find((dates) => {
      return (
        dates.date.toString() === appointmentBooking.date.toString() &&
        dates.startTime.toString() ===
          appointmentBooking.startTime.toString() &&
        dates.endTime.toString() === appointmentBooking.endTime.toString()
      );
    });

    if (isAppointmentExists === undefined) {
      return next(
        new ErrorHandler(400, "Appoinment doesn't exist on this date or time")
      );
    }
    //counting the number of appointments that have been booked on paticular date and time of a doctor
    const count = await Appointments.countDocuments({
      doctorId,
      availableHours: {
        startTime: appointmentBooking.startTime,
        endTime: appointmentBooking.endTime,
      },
      status: "scheduled",
    });

    if (count > isAppointmentExists.noOfAppointments) {
      return next(
        new ErrorHandler(400, "Sorry, appointment are completed booked")
      );
    }

    // checks if the user already bookend an appointment on the same time
    let appointment = await Appointments.findOne({
      doctorId,
      userId,
      startTime: appointmentBooking.startTime,
      endTime: appointmentBooking.endTime,
    });
    if (appointment) {
      return next(
        new ErrorHandler(
          400,
          "You have already booked an appointment on this date and time"
        )
      );
    }

    const phoneNumber = user.phoneNumber;
    //finding price of an appointment from the doctors document
    const findPrice = doctor.specialization.find((category) => {
      return category.category === specilaize;
    });

    if (findPrice === undefined) {
      return next(
        new ErrorHandler(
          400,
          "Please select the doctor according to their specialization"
        )
      );
    }
    const price = findPrice.price;
    const status = "scheduled";

    //creating appointment
    appointment = await Appointments.create({
      userId,
      doctorId,
      paitentName,
      age,
      phoneNumber: phoneNumber,
      price: price,
      disease,
      status: status,
      date: appointmentBooking.date,
      startTime: appointmentBooking.startTime,
      endTime: appointmentBooking.endTime,
    });

    // adding appointment id in users appointment array
    user = await User.findByIdAndUpdate(
      userId,
      { $push: { appointments: appointment._id } },
      { new: true }
    );
    // adding appointment id in doctors appointment array
    doctor = await Doctor.findByIdAndUpdate(
      doctorId,
      { $push: { appointments: appointment._id } },
      { new: true }
    );

    res.status(201).json({
      success: true,
      message: "Appointment has been created",
      appointment,
    });
  }
);

export const cancleAppointment = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const doctorId = req.params.id;
    const userId = req.body.user;
    const { date, startTime, endTime } = req.body;

    if (!doctorId || !userId) {
      return next(new ErrorHandler(400, "Unauthorized Id or token"));
    }
    if (!date || !startTime || !endTime) {
      return next(new ErrorHandler(400, "Please Enter all the details"));
    }

    let user = await User.findById(userId);
    if (!user) {
      return next(new ErrorHandler(400, "Invalid token"));
    }

    let doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return next(new ErrorHandler(400, "Doctor dosen't Exists"));
    }

    // converting date, startTime, endTime form String to Date Formate
    const appointmentBooking = {
      date: new Date(`${date}T00:00:00Z`),
      startTime: new Date(`${date}T${startTime}`),
      endTime: new Date(`${date}T${endTime}`),
    };

    //getting appointment timimgs from the doctors availableHours
    let isAppointmentExists = doctor.availableHours.find((dates) => {
      return (
        dates.date.toString() === appointmentBooking.date.toString() &&
        dates.startTime.toString() ===
          appointmentBooking.startTime.toString() &&
        dates.endTime.toString() === appointmentBooking.endTime.toString()
      );
    });

    if (isAppointmentExists === undefined) {
      return next(
        new ErrorHandler(400, "Appoinment doesn't exist on this date or time")
      );
    }

    const appointment = await Appointments.findOneAndUpdate(
      { userId, doctorId, availableHours: appointmentBooking },
      { $set: { status: "cancled" } },
      { new: true }
    );

    res
      .status(200)
      .json({
        success: true,
        message: "Appointment has been cancled successfully",
        appointment,
      });
  }
);

export const getAllAppointment = asyncErrorHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.body.user;

    const appointments = await Appointments.findOne({ userId }).lean();
    if (!appointments) {
      next(new ErrorHandler(400, "You have booked an appointment yet."));
    }

    res.status(200).json({ success: true, appointments });
  }
);
