import mongoose from "mongoose";

export interface PaymentSchemaType {
  userId: mongoose.Schema.Types.ObjectId;
  doctorId: mongoose.Schema.Types.ObjectId;
  transactionId: String;
  date: Date;
  paitentName: String;
  doctorName: String;
  transactionAmount: String;
  status: string;
}
