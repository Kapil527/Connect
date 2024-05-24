import asyncErrorHandler from "../middleware/catchAsyncError";
import Doctor from "../models/doctorModel";
import ErrorHandler from "../utils/errorHandler";

// creates an appointment.
export const setAppointment = asyncErrorHandler(async (req, res, next) => {
  const doctorId = req.params.id;
  const availableHour = req.body.availableHour;

  const doctor = await Doctor.findByIdAndUpdate(
    doctorId,
    { $push: { availableHours: availableHour } },
    { $new: true }
  ).exec();

  return res
    .status(201)
    .json({ success: true, message: `Appointments created successfully on` });
});

//updates/changes the date or time of an appointment
export const cancleAppointmentTime = asyncErrorHandler(
  async (req, res, next) => {
    const doctorId = req.params.id;
    const appointment = req.body.appointment;

    const doctor = await Doctor.findByIdAndUpdate(
      doctorId,
      { $pull: { availableHours: { _id: appointment[0]._id } } },
      { safe: true, new: true }
    );

    return res.json(doctor);
  }
);

export const getAppointmentsOnADate = asyncErrorHandler(
  async (req, res, next) => {
    const doctorId = req.params.id;
    const userId = req.body.user;
    const { date } = req.body;

    let doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return next(new ErrorHandler(400, "Unauthorized"));
    }

    if (userId !== doctor.userId.toString()) {
      return next(new ErrorHandler(400, "Unauthorized"));
    }

    if (!date) {
      return next(new ErrorHandler(400, "Please Enter the date"));
    }
    const availableHour = new Date(`${date}T00:00:00Z`);

    const appointments = doctor.availableHours.filter((date) => {
      return date.date.toString() === availableHour.toString();
    });

    return res.status(200).json({ success: true, appointments });
  }
);

export const getAllAppointments = asyncErrorHandler(async (req, res, next) => {
  const doctorId = req.params.id;
  const userId = req.body.user;

  let doctor = await Doctor.findById(doctorId);
  if (!doctor) {
    return next(new ErrorHandler(400, "Unauthorized"));
  }

  if (userId !== doctor.userId.toString()) {
    return next(new ErrorHandler(400, "Unauthorized"));
  }

  const appointments = await Doctor.findById(doctorId).select("availableHours");

  return res.status(200).json({ success: true, appointments });
});
