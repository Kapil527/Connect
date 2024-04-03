import mongoose, { Schema, model } from "mongoose";

import { AppointmentSchemaType } from "types/Schema/appointment";

const appointmentSchema = new Schema<AppointmentSchemaType>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  paymentId: { type: mongoose.Schema.Types.ObjectId, require: true },
  paitentName: { type: String, require: true },
  paitentAge: { type: String, require: true },
  gender: { type: String, require: true },
  disease: { type: String, require: true },
  date: { type: Date, require: true },
  startTime: { type: Date, require: true },
  endTime: { type: Date, require: true },
  status: {
    type: String,
    enum: ["scheduled", "completed", "cancelled"],
    require: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const Appointments = model<AppointmentSchemaType>(
  "appointments",
  appointmentSchema
);

export default Appointments;
