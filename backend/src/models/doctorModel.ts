import mongoose, { Schema, model } from "mongoose";

import { DoctorSchemaType } from "../types/Schema/doctors";

const doctorSchema = new Schema<DoctorSchemaType>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userId",
    require: true,
  },
  education: { type: String, require: true },
  experience: { type: String },
  availableHours: {
    type: [
      {
        date: { type: Date, require: true },
        startTime: { type: Date, require: true },
        endTime: { type: Date, require: true },
        noOfAppointments: { type: Number, require: true },
      },
    ],
  },
  specialization: [
    {
      category: { type: String, require: true },
      price: { type: String, require: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Doctor = model<DoctorSchemaType>("doctor", doctorSchema);

export default Doctor;
