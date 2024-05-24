import mongoose from "mongoose";

import { CommonType } from "./commonType";

export interface AppointmentSchemaType extends CommonType {
  paymentId: mongoose.Schema.Types.ObjectId;
  status: string;
  startTime: Date;
  endTime: Date;
  createdAt: Date;
}
