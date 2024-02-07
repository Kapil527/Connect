import mongoose from "mongoose";

export interface DoctorSchemaType {
  userId: mongoose.Schema.Types.ObjectId;
  appointments: [mongoose.Schema.Types.ObjectId];
  education: string;
  experience?: string;
  availableHours: [{ date: Date; startTime: Date; endTime: Date, noOfAppointments: number }];
  specialization: [{ category: string; price: string }];
  createdAt: Date;
}
