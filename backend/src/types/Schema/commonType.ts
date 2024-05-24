import mongoose from "mongoose";

export interface CommonType {
  userId: mongoose.Schema.Types.ObjectId;
  doctorId: mongoose.Schema.Types.ObjectId;
  paitentName: String;
  paitentAge: String;
  gender: String;
  disease: String;
  date: Date;
}
