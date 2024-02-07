import mongoose, { Schema, model } from "mongoose";

import { AppointmentSchemaType } from "types/Schema/appointment";

const appointmentSchema = new Schema<AppointmentSchemaType>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  paitentName: { type: String, require: true },
  age: { type: String, require: true },
  phoneNumber: { type: String, require: true },
  price: { type: String, require: true },
  disease: { type: String, require: true },
  status: {
    type: String,
  },
  date: { type: Date, require: true },
  startTime: { type: Date, require: true },
  endTime: { type: Date, require: true },
  createdAt: { type: Date, default: Date.now },
});

const Appointments = model<AppointmentSchemaType>(
  "appointments",
  appointmentSchema
);

export default Appointments;
