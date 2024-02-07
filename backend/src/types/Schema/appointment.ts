import mongoose from "mongoose";

export interface AppointmentSchemaType {
  userId: mongoose.Schema.Types.ObjectId;
  doctorId: mongoose.Schema.Types.ObjectId;
  paitentName: string;
  age: string;
  phoneNumber: string;
  price: string;
  disease: string;
  status: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  createdAt: Date;
}
