import mongoose, { Schema, model } from "mongoose";

import { PrescriptionSchemaType } from "types/Schema/prescription";

const prescriptionSchema = new Schema<PrescriptionSchemaType>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  paitentName: {
    type: String,
    require: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  paitentAge: { type: String, require: true, trim: true },
  gender: { type: String, require: true, trim: true },
  disease: { type: String, require: true },
  prescription: [{ medicineName: { type: String }, dosage: { type: Number } }],
});

const Prescription = model<PrescriptionSchemaType>(
  "Prescription",
  prescriptionSchema
);

export default Prescription;
