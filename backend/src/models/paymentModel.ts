import mongoose, { Schema } from "mongoose";

import { PaymentSchemaType } from "types/Schema/payment";

const paymentSchema = new Schema<PaymentSchemaType>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  transactionId: { type: String, require: true },
  paitentName: { type: String, require: true },
  doctorName: { type: String, require: true },
  transactionAmount: { type: String, require: true },
  status: { type: String, enum: ["Success", "Failed"] },
});

const Payment = mongoose.model<PaymentSchemaType>("Payment", paymentSchema);

export default Payment;
