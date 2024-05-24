import mongoose from "mongoose";

export interface UserSchemaType {
  username: string;
  phoneNumber: string;
  appointments: [mongoose.Schema.Types.ObjectId];
  password: string;
  dob?: Date;
  image?: string;
  role: string;
  createdAt: Date;
}
